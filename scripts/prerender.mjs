import { readFile, writeFile } from "node:fs/promises";
import React from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

const vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

try {
  const { default: App } = await vite.ssrLoadModule("/src/App.jsx");
  const markup = renderToString(React.createElement(App));
  const path = new URL("../dist/index.html", import.meta.url);
  const html = await readFile(path, "utf8");
  const output = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);

  if (output === html) {
    throw new Error("Prerender target #root was not found in dist/index.html");
  }

  await writeFile(path, output);
} finally {
  await vite.close();
}
