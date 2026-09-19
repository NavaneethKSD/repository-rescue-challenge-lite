const DEFAULT_API_URL = "http://localhost:8080";

function calc(a, b) {
  return a + b;
}

function doThing(n) {
  return n * 2;
}

function fetchData(url = process.env.API_URL || DEFAULT_API_URL) {
  console.log(`fetching from ${url}`);
  return { ok: true, url };
}

module.exports = { calc, doThing, fetchData };
