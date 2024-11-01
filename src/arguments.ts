import { parse } from "https://deno.land/std@0.200.0/flags/mod.ts";
import type { Args } from "https://deno.land/std@0.200.0/flags/mod.ts";
import { Config } from "./config.ts";

type Alias = {
  short: string,
  long: string,
  description: string,
}

const optionalFlags: Alias[] = [
  {
    short: "h",
    long: "help",
    description: "Display this help and exit",
  },
];

const get = (): Args => {
  const args = Deno.args;

  const booleanArgs = [
    "help",
  ];

  const stringArgs = [
    "name",
    "color",
  ];

  return parse(args, {
    alias: optionalFlags.reduce((acc, { short, long }) => {
      acc[short] = long;
      return acc;
    }, {} as Record<string, string>),
    boolean: booleanArgs,
    string: stringArgs,
    stopEarly: false,
    "--": true,
  });
}

const printHelp = (): void => {
  console.log(`Usage: ${Config.name} [OPTIONS...]`);
  console.log("\nOptional flags:");
  for (const {short, long, description} of optionalFlags) {
    console.log(`  -${short}, --${long} ${" ".repeat(18 - long.length)}${description}`);
  }
}

export const Arguments = {
  get,
  printHelp,
}