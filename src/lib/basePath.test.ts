import { describe, expect, it } from "vitest";
import { routePath } from "./basePath";

describe("routePath", () => {
  it("returns slash for root when no base", () => {
    expect(routePath("/")).toBe("/");
    expect(routePath("/about")).toBe("/about");
  });
});
