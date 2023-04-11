#! /usr/bin/env node

import { PackageNameProps } from "./index.js";

export type TemplateConfig = {
  name: string;
  label: string;
  description: string;
  constants: { [K: string]: string };
  extendedPackage: { [K: string]: unknown };
  dependencies: string[];
  devDependencies: string[];
  files?: string[];
  initialInstaller?: {
    [K in PackageNameProps]: string;
  };
};

export const getTemplates = (appName: string): TemplateConfig[] => [
  {
    name: "vite-react",
    label: "React-Vite-Typescript-Mantine",
    description: "React, Vite, Mantine, React-Query, Axios",
    // initialInstaller: `yarn create vite ${appName} --template react-ts`,
    initialInstaller: {
      yarn: `yarn create vite ${appName} --template react-ts`,
      npm: `npm create vite@latest ${appName} -- --template react-ts`,
      pnpm: `pnpm create vite@latest ${appName} --template react-ts`,
    },

    files: [
      "src",
      "public",
      "_templates",
      `.babel-plugin-macrosrc.json`,
      `.eslintrc.json`,
      `.prettierrc`,
      "tsconfig.json",
      "vite.config.ts",
    ],

    constants: {
      siteName: appName,
      apiUrl: "",
    },

    extendedPackage: {
      scripts: {
        serve: "tsc && vite build && vite preview",
        mnc: "hygen component mantine --name",
        nc: "hygen component new --name",
        np: "hygen page new --name",
        tsc: "tsc",
        lint: "eslint ./src/**/*.{ts,tsx}",
        "lint:fix": "eslint --fix 'src/**/*.{ts,tsx}'",
      },
    },

    dependencies: [
      "@emotion/react",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/react-fontawesome",
      "@mantine/core",
      "@mantine/form",
      "@mantine/hooks",
      "@reduxjs/toolkit",
      "@tanstack/react-query",
      "axios",
      "js-cookie",
      "react-redux",
      "react-router-dom",
    ],

    devDependencies: [
      "@types/js-cookie",
      "@types/node",
      "@typescript-eslint/eslint-plugin",
      "@typescript-eslint/parser",
      "babel-plugin-macros",
      "eslint",
      "eslint-config-prettier",
      "eslint-plugin-prettier",
      "eslint-plugin-react",
      "eslint-plugin-simple-import-sort",
      "prettier",
    ],
  },
  // {
  //   name: "ts-starter",
  //   label: "Typescript Starter",
  //   description: "Typescript, nodemon",
  //   constants: {},
  //   extendedPackage: {},
  //   dependencies: [],
  //   devDependencies: ["@types/node", "nodemon", "typescript"],
  // },
];
