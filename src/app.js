// Simple starter application.
// It runs, but it is not finished.

// TODO: replace placeholder implementation

const DEFAULT_APP_PORT = 8080;
const APP_PORT = Number.parseInt(process.env.APP_PORT || DEFAULT_APP_PORT, 10);

if (!Number.isInteger(APP_PORT) || APP_PORT < 1 || APP_PORT > 65535) {
  throw new Error("APP_PORT must be an integer between 1 and 65535");
}

function main() {
  // TODO: replace placeholder implementation
  const message = "app is running (placeholder)";
  console.log(message);
  console.log("listening on port " + APP_PORT);
}

main();
