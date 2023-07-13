import { Argv } from 'yargs';

export function crashes(ya: Argv) {
  // this line causes a compiler crash:
  return ya.option;
}
