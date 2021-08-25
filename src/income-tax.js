/** @typedef {"TK0"|"K0"|"K1"|"K2"|"K3"} TaxRelief */

/** @type {Record<TaxRelief, number>} */
const taxRelief = {
  TK0: 54_000_000,
  K0: 58_500_000,
  K1: 63_000_000,
  K2: 67_500_000,
  K3: 72_000_000,
};

/** @type {[number, number][]} */
const taxTariff = [
  [0.05, 50_000_000],
  [0.15, 250_000_000],
  [0.25, 500_000_000],
  [0.3, Infinity],
];

/**
 * @param {number} income Net income
 * @param {TaxRelief} reliefType Tax relief type
 * @returns {number} income Income tax
 */
function calculateIncomeTax(income, reliefType) {
  const afterRelief = income - taxRelief[reliefType];
  if (afterRelief <= 0) return 0;
  let tax = 0;
  for (let i = 0; i < taxTariff.length; i++) {
    const [tariff, limit] = taxTariff[i];
    const [, prevLimit] = i ? taxTariff[i - 1] : [0, 0];
    const part = afterRelief - prevLimit;
    if (part <= 0) break;
    else if (part < limit) tax += Math.trunc(part * (1 / 1000)) * 1000 * tariff;
    else tax += limit * tariff;
  }
  return tax;
}

module.exports = calculateIncomeTax;
