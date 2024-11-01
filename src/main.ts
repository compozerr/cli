import { Arguments } from "./arguments.ts";

function main(): void {
  const args = Arguments.get();

  // If help flag enabled, print help.
  if (args.help) {
    Arguments.printHelp();
    Deno.exit(0);
  }

  console.log(`Hello, ${name ?? "World"}!`);
}

main();