#! /usr/bin/env node
import _ from "lodash";
import { asyncForEach, copyFile, deleteFolderIfExists, getSourcePath, getUserInput, makeFile, readFile, runCommand, selectOne, sleep, } from "./helpers.js";
import { getTemplates } from "./templates.js";
const packageManagers = ["pnpm", "yarn", "npm"];
const args = process.argv.slice(2);
const initialAppName = args[0];
const getPackageManager = async () => {
    console.log("Select your package manager");
    const packageManager = await selectOne(packageManagers);
    return packageManager;
};
const getTemplateConfig = async (name, templates) => {
    let selectedTemplate = templates[0].name;
    if (templates.length > 1) {
        selectedTemplate = await selectOne(getTemplates(name).map((el) => el.name));
    }
    const config = templates.find((el) => el.name === selectedTemplate);
    return config;
};
const getAppName = async () => {
    if (initialAppName)
        return initialAppName;
    const name = await getUserInput("What is your app name?");
    if (!name) {
        return await getAppName();
    }
    return name;
};
const installDependencies = async ({ dir, packageManager, libs, isDev, }) => {
    const cd = `cd ${dir}`;
    if (packageManager === "yarn") {
        if (isDev)
            return await runCommand(`${cd} && yarn add -D ${libs}`);
        return await runCommand(`${cd} && yarn add ${libs}`);
    }
    if (packageManager === "pnpm") {
        if (isDev)
            return await runCommand(`${cd} && pnpm add -D ${libs}`);
        return await runCommand(`${cd} && pnpm add ${libs}`);
    }
    if (isDev)
        return await runCommand(`${cd} && npm install --save-dev ${libs}`);
    return await runCommand(`${cd} && npm install ${libs}`);
};
const initiateApp = async ({ name, configs, packageManager, }) => {
    if (configs.initialInstaller) {
        await runCommand(configs.initialInstaller[packageManager]);
    }
    else {
        await runCommand(`mkdir ${name}`);
    }
    if (configs.dependencies.length > 0) {
        await installDependencies({
            dir: name,
            packageManager,
            libs: configs.dependencies.join(" "),
            isDev: false,
        });
    }
    if (configs.devDependencies.length > 0) {
        await installDependencies({
            dir: name,
            packageManager,
            libs: configs.devDependencies.join(" "),
            isDev: true,
        });
    }
};
const copyAllFiles = async ({ files, source, target, }) => {
    await asyncForEach(files, async (item) => {
        const filePath = `${source}/${item}`;
        await deleteFolderIfExists(`./${target}/${item}`);
        await copyFile(filePath, `./${target}/${item}`);
        console.log("Copied => ", item);
        await sleep(100);
    });
};
const mergePackages = async ({ packagePath, data, }) => {
    let packageContent = JSON.parse(readFile(packagePath));
    const mergedPackages = await _.merge(packageContent, data);
    await deleteFolderIfExists(packagePath);
    makeFile(packagePath, JSON.stringify(mergedPackages, null, 2));
};
const start = async () => {
    const sourcePath = getSourcePath();
    const name = await getAppName();
    const templates = getTemplates(name);
    const configs = await getTemplateConfig(name, templates);
    const packageManager = await getPackageManager();
    await initiateApp({ name, packageManager, configs });
    await copyAllFiles({
        files: configs.files,
        source: `${sourcePath}templates/${configs.name}`,
        target: `${name}`,
    });
    await mergePackages({
        packagePath: `${name}/package.json`,
        data: configs.extendedPackage,
    });
};
start();
//# sourceMappingURL=index.js.map