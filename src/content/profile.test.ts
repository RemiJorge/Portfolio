import { describe, expect, it } from "vitest";
import {
  COVALORIS,
  PERSON,
  SITE,
  SKILL_CATEGORIES,
  TIMELINE_EVENTS,
} from "./profile";

describe("profile content", () => {
  it("site metadata mentions AI and Covaloris", () => {
    expect(SITE.description.toLowerCase()).toContain("covaloris");
    expect(SITE.description.toLowerCase()).toContain("ai");
  });

  it("person tagline includes remote US opportunities", () => {
    expect(PERSON.tagline.toLowerCase()).toContain("remote");
    expect(PERSON.tagline.toLowerCase()).toContain("us");
  });

  it("has core skill categories plus platforms and soft skills", () => {
    const keys = Object.keys(SKILL_CATEGORIES);
    expect(keys).toEqual(
      expect.arrayContaining([
        "ML / AI",
        "Frameworks",
        "Languages",
        "Data",
        "Infra",
        "Platforms & tools",
        "Leadership",
        "Soft skills",
      ])
    );
    expect(keys).toHaveLength(8);
  });

  it("ML / AI category highlights modern stack", () => {
    const ml = SKILL_CATEGORIES["ML / AI"].join(" ").toLowerCase();
    expect(ml).toContain("rag");
    expect(ml).toContain("multi-agent");
    expect(ml).toContain("reinforcement");
    const fw = SKILL_CATEGORIES.Frameworks.join(" ").toLowerCase();
    expect(fw).toContain("langgraph");
  });

  it("Covaloris block has role, period, and six bullets", () => {
    expect(COVALORIS.role).toContain("CTO");
    expect(COVALORIS.period.toLowerCase()).toContain("2025");
    expect(COVALORIS.highlights).toHaveLength(6);
    expect(COVALORIS.highlights.join(" ")).toMatch(/LangGraph|LangChain/i);
  });

  it("timeline leads with Covaloris", () => {
    const first = TIMELINE_EVENTS[0];
    expect(first.title.toLowerCase()).toContain("covaloris");
    expect(first.title.toLowerCase()).toContain("cto");
  });
});
