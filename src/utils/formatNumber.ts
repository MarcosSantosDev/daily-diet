/**
 * Formats a number as a percentage.
 * @param value The value to be formatted.
 * @param decimals The number of decimal places to display (default is 2).
 * @returns A string formatted as a percentage.
 */
export const formatPercentage = (value: number, decimals: number = 2): string => {
  if (isNaN(value)) {
    throw new Error("The provided value is not a number.");
  }
  
  const formattedValue = (value * 100).toFixed(decimals).replace('.', ',');
  return `${formattedValue}%`;
};