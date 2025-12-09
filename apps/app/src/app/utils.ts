export const formatNumber = (number: number) =>
  number.toLocaleString(navigator.language, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });

export const getLocaleSettings = () => {
  const decimalSeparator = formatNumber(1.1)[1];
  const thousandSeparator = formatNumber(1000)[1];

  return { decimalSeparator, thousandSeparator };
};
