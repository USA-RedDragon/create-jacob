import { readFileSync } from 'fs';
import path from 'path';

import { ArgumentParser } from 'argparse';
import inquirer from 'inquirer';

import allSettings from './wizard/settings';

const version = JSON.parse(readFileSync(path.join(__dirname, '../package.json'))).version;

const parser = new ArgumentParser({
    version: version,
    addHelp: true,
    description: 'Creates an API backend',
});

parser.addArgument(['projectName'], { help: 'The name of the project to make' });
const args = parser.parseArgs();

async function main() {
    const promptResult = await inquirer.prompt(allSettings);

    console.log(promptResult);
    console.log(args);
}

main();
