export const txtToJson = (text: string) => {
  const [, header, ...data] = text.split('\n');

  const keys = header.split('|').map((key) => key.toLowerCase());
  const codeKey = keys.at(-2) ?? 'code';

  const currencies = new Map<string, Record<string, string>>();

  // Remove last empty line
  data.pop();

  data.forEach((row) => {
    const rowItems = row.split('|');

    const currencyData = keys.reduce<Record<string, string>>(
      (value, key, index) => ({ ...value, [key]: rowItems[index] }),
      {}
    );

    currencies.set(currencyData[codeKey], currencyData);
  });

  return Object.fromEntries(currencies);
};
