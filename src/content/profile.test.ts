import { describe, it, expect } from "vitest";
import {
  assertProfileIntegrity,
  experiences,
  identity,
  journeyTimeline,
  pitchOneLine,
  skillCategories,
} from "./profile";

describe("profile content", () => {
  it("assertProfileIntegrity passes", () => {
    expect(() => assertProfileIntegrity()).not.toThrow();
  });

  it("includes Covaloris and Airbus with periods and bullets", () => {
    const cov = experiences.find((e) =>
      e.company.toLowerCase().includes("covaloris")
    );
    const air = experiences.find((e) =>
      e.company.toLowerCase().includes("airbus")
    );
    expect(cov?.period).toContain("2025");
    expect(cov?.highlights.length).toBeGreaterThanOrEqual(4);
    expect(air?.period).toMatch(/2025/);
    expect(air?.highlights.some((h) => h.includes("FAISS"))).toBe(true);
  });

  it("has contact fields", () => {
    expect(identity.email).toContain("@");
    expect(identity.githubUrl).toMatch(/^https:/);
    expect(identity.linkedinUrl).toMatch(/^https:/);
  });

  it("pitch is non-empty professional string", () => {
    expect(pitchOneLine.length).toBeGreaterThan(40);
    expect(pitchOneLine.toLowerCase()).toContain("covaloris");
  });

  it("skill categories cover ML, frameworks, infra", () => {
    expect(skillCategories["ML / AI"]?.length).toBeGreaterThan(0);
    expect(skillCategories.Frameworks?.some((s) => s.includes("LangGraph"))).toBe(
      true
    );
    expect(skillCategories.Infra?.some((s) => s.includes("Kubernetes"))).toBe(
      true
    );
  });

  it("journey timeline starts with Covaloris then Airbus", () => {
    expect(journeyTimeline[0]?.title).toContain("Covaloris");
    expect(journeyTimeline[1]?.title).toContain("Airbus");
  });
});
