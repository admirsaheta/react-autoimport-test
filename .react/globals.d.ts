export {};

declare global {
  const logger: typeof import("./logger")["logger"];
}