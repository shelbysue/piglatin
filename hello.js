import chalk from 'chalk';
import { DateTime } from "luxon";
import { add } from './math.js';

console.log(chalk.red('Hello world!'));

const thirtyDays = DateTime.now().setZone("America/New_York").minus({ weeks: 1 }).endOf("day").toISO();
console.log(chalk.blue(thirtyDays));

console.log(add(2,2));