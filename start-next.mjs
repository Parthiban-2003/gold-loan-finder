import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;
import { spawn } from "node:child_process";

loadEnvConfig(process.cwd());

const port = process.env.PORT || "3000";
const command = process.argv.includes("--dev") ? "dev" : "start";

const child = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", command, "-p", port],
  { stdio: "inherit" },
);

child.on("error", (error) => {
  console.error("Next.js startup failed:", error);
  process.exitCode = 1;
});

child.on("exit", (code) => {
  process.exitCode = code ?? 1;
});
