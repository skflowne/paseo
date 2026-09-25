import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { NO_DRAG_SCOPE_ATTRIBUTE, TITLEBAR_DRAG_OVERLAY_ATTRIBUTE } from "./titlebar-drag-region";

const indexHtml = readFileSync(path.resolve(__dirname, "../../../public/index.html"), "utf8");

describe("index.html app-region backstop", () => {
  it("scopes the no-drag backstop to drag-overlay surfaces and no-drag scopes", () => {
    expect(indexHtml).toContain(`:has(> [${TITLEBAR_DRAG_OVERLAY_ATTRIBUTE}]) *,`);
    expect(indexHtml).toContain(`[${NO_DRAG_SCOPE_ATTRIBUTE}],`);
    expect(indexHtml).toContain(`[${NO_DRAG_SCOPE_ATTRIBUTE}] *`);
  });
});
