// @ts-nocheck

const calculateIncomeTax = require("./income-tax");

describe("calculateIncomeTax", () => {
  it("should correctly calculate income tax", () => {
    expect(calculateIncomeTax(72_000_000, "TK0")).toBe(900_000);
    expect(calculateIncomeTax(89_409_360, "TK0")).toBe(1_770_450);
    expect(calculateIncomeTax(62_440_900, "TK0")).toBe(422_000);
    expect(calculateIncomeTax(120_000_000, "K1")).toBe(3_550_000);
    expect(calculateIncomeTax(560_000_000, "K3")).toBe(99_500_000);
    expect(calculateIncomeTax(560_000_000, "TK0")).toBe(105_800_000);
  });
});
