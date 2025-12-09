import { createServer } from 'node:http';
import { txtToJson } from './txt-to-json';

const API_URL =
  'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt';
const PORT = process.env.PORT ?? 1337;
const HEADERS = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*.slarka.com' };

const server = createServer(async (_req, res) => {
  const response = await fetch(API_URL);

  if (response.status !== 200) {
    res.end({});

    return;
  }

  const currencies = txtToJson(await response.text());

  res.writeHead(200, HEADERS).end(JSON.stringify(currencies));
});

server.listen(PORT);

console.log('Listening on port', PORT);
