export function calculateResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let valueEndOfYear = initialInvestment;
  let totalInterest = 0;
  let totalInvestedCapital = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = valueEndOfYear * (expectedReturn / 100);
    valueEndOfYear += interestEarnedInYear + annualInvestment;
    if (i > 0) totalInterest += interestEarnedInYear;
    totalInvestedCapital += annualInvestment;

    annualData.push({
      year: i + 1, // year identifier
      valueEndOfYear: valueEndOfYear,
      interest: interestEarnedInYear,
      totalInterest: totalInterest,
      totalInvestedCapital: totalInvestedCapital,
    });
  }

  return annualData;
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
