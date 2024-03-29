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
      "index.html",
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
      logoUrl: "/logo.svg",
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
  {
    name: "react-native-starter",
    label: "React-Native-Typescript",
    description: "React-Native, RNUILIB, VectorIcons,",
    initialInstaller: {
      yarn: `npx react-native@latest init ${appName} --skip-install`,
      npm: `npx react-native@latest init ${appName} --skip-install`,
      pnpm: `npx react-native@latest init ${appName} --skip-install`,
    },

    files: [
      "src",
      ".eslintrc.js",
      ".prettierrc.js",
      "babel.config.js",
      "declarations.d.ts",
      "index.js",
      "metro.config.js",
      "react-native.config.js",
      "README.md",
      "tsconfig.json",
    ],

    constants: {
      siteName: appName,
      apiUrl: "",
      logoUrl: "/logo.svg",
    },

    extendedPackage: {
      scripts: {
        ios14: "react-native run-ios --simulator='iPhone 14 Pro'",
      },
    },

    dependencies: [
      "@react-native-community/blur",
      "@react-native-community/datetimepicker",
      "@react-native-community/netinfo",
      "@react-native-picker/picker",
      "@react-navigation/bottom-tabs",
      "@react-navigation/native",
      "@react-navigation/native-stack",
      "@reduxjs/toolkit",
      "@tanstack/react-query",
      "dayjs",
      "i18next",
      "react-i18next",
      "react-native-device-info",
      "react-native-gesture-handler",
      "react-native-mmkv",
      "react-native-reanimated",
      "react-native-safe-area-context",
      "react-native-screens",
      "react-native-svg",
      "react-native-toast-notifications",
      "react-native-ui-lib",
      "react-native-uuid",
      "react-native-vector-icons",
      "react-redux",
      "redux-persist",
    ],

    devDependencies: [
      "@types/react-native-vector-icons",
      "babel-plugin-module-resolver",
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
