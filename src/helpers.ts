#! /usr/bin/env node

import fs from "fs";
import cliSelect from "cli-select";
import ncp from "ncp";
import chalk from "chalk";
import { execSync } from "child_process";
import readline from "readline";

const fsPromises = fs.promises;

export const readFile = (filePath: string) => {
  return fs.readFileSync(filePath, "utf-8");
};

export const getSourcePath = () => {
  const binPath = new URL(".", import.meta.url);
  return new URL("..", binPath).pathname;
};

export const someHelper = () => {
  console.log("Hello from helper");
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const copyFile = async (source: string, target: string) => {
  ncp(source, target, function (err: unknown) {
    if (err) {
      throw err;
    }
  });
};

export const getUserInput = async (txt: string): Promise<string> => {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    readlineInterface.question(txt + " ", (name: string) => {
      readlineInterface.close();
      resolve(name);
    });
  });
};

export const runCommand = async (command: string) => {
  try {
    return execSync(command, {
      stdio: "inherit",
    });
  } catch (error) {
    throw error;
  }
};

export const isExists = (folderPath: string) => {
  if (!fs.existsSync(folderPath)) {
    return false;
  }
  return true;
};

export const deleteFolderIfExists = async (dir: string) => {
  if (isExists(dir)) {
    await fsPromises.rm(dir, { recursive: true });
  }
};

export const makeFile = async (filePath: string, content: string) => {
  fs.writeFileSync(filePath, content);
};

export const selectOne = (values: string[]): Promise<string> => {
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

export async function asyncForEach<T>(
  array: T[],
  callback: (item: T, index: number, arr: T[]) => void
) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}
