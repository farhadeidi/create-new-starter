import fs from "fs";
import cliSelect from "cli-select";
import ncp from "ncp";
import chalk from "chalk";
import { execSync } from "child_process";
import readline from "readline";
const fsPromises = fs.promises;
export const readFile = (filePath) => {
    return fs.readFileSync(filePath, "utf-8");
};
export const getSourcePath = () => {
    const binPath = new URL(".", import.meta.url);
    return new URL("..", binPath).pathname;
};
export const someHelper = () => {
    console.log("Hello from helper");
};
export const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
export const copyFile = async (source, target) => {
    ncp(source, target, function (err) {
        if (err) {
            throw err;
        }
    });
};
export const getUserInput = async (txt) => {
    const readlineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve, reject) => {
        readlineInterface.question(txt + " ", (name) => {
            readlineInterface.close();
            resolve(name);
        });
    });
};
export const runCommand = async (command) => {
    try {
        return execSync(command, {
            stdio: "inherit",
        });
    }
    catch (error) {
        throw error;
    }
};
export const isExists = (folderPath) => {
    if (!fs.existsSync(folderPath)) {
        return false;
    }
    return true;
};
export const deleteFolderIfExists = async (dir) => {
    if (isExists(dir)) {
        await fsPromises.rm(dir, { recursive: true });
    }
};
export const makeFile = async (filePath, content) => {
    fs.writeFileSync(filePath, content);
};
export const selectOne = (values) => {
    return new Promise((resolve, reject) => {
        cliSelect({
            values: values,
            valueRenderer: (value, selected) => {
                if (selected) {
                    return chalk.blue(value);
                }
                return value;
            },
        })
            .then((res) => {
            console.log("Selected =>", res.value);
            resolve(res.value);
        })
            .catch(() => {
            console.log("cancelled");
            reject();
        });
    });
};
export async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}
//# sourceMappingURL=helpers.js.map