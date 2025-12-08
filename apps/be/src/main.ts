import { createServer } from 'node:http';

const API_URL =
  'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt';
const PORT = process.env.PORT ?? 1337;

const server = createServer(async (req, res) => {
  // Ignore base, we only need search params
  const { searchParams } = new URL(req.url ?? '', 'http://localhost');
  const dateString = searchParams.get('date');
  const date = dateString ? new Date(dateString) : new Date();

  const params = new URLSearchParams({
    date: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
  });

  const response = await fetch(`${API_URL}?${params}`);

  if (response.status !== 200) {
    res.end({});

    return;
  }

  const [, header, ...data] = (await response.text()).split('\n');

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

  res
    .writeHead(200, { 'Content-Type': 'application/json' })
    .end(JSON.stringify(Object.fromEntries(currencies)));
});

server.listen(PORT);

console.log('Listening on port', PORT);
