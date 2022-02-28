export const cleanPercentage = (percentage: number) => {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0;
  const isTooHigh = percentage > 100;
  const normalize = isTooHigh ? 100 : +percentage;

  return isNegativeOrNaN ? 0 : normalize;
};
