import { cleanPercentage } from "./percentage.helper";

describe("cleanPercentage()", () => {
  it("should to be defined", () => {
    expect(cleanPercentage).toBeDefined();
  });

  it("should to return the value it received", () => {
    const result = cleanPercentage(85);

    expect(result).toBe(85);
  });

  it("should to return 0 if it receives a negative percentage", () => {
    const result = cleanPercentage(-0.56);

    expect(result).toBe(0);
  });

  it("should to return 100 if it receives a percentage above 100", () => {
    const result = cleanPercentage(120);

    expect(result).toBe(100);
  });
});
