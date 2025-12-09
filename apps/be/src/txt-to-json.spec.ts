import { txtToJson } from './txt-to-json';

const EXAMPLE_DATA = `08 Dec 2025 #237
Country|Currency|Amount|Code|Rate
Australia|dollar|1|AUD|13.825
Brazil|real|1|BRL|3.850
Bulgaria|lev|1|BGN|12.406
Canada|dollar|1|CAD|15.083
China|renminbi|1|CNY|2.946
Denmark|krone|1|DKK|3.249
EMU|euro|1|EUR|24.270
Hongkong|dollar|1|HKD|2.676
Hungary|forint|100|HUF|6.334
Iceland|krona|100|ISK|16.310
IMF|SDR|1|XDR|28.393
India|rupee|100|INR|23.126
Indonesia|rupiah|1000|IDR|1.248
Israel|new shekel|1|ILS|6.491
Japan|yen|100|JPY|13.390
Malaysia|ringgit|1|MYR|5.063
Mexico|peso|1|MXN|1.145
New Zealand|dollar|1|NZD|12.054
Norway|krone|1|NOK|2.059
Philippines|peso|100|PHP|35.245
Poland|zloty|1|PLN|5.739
Romania|leu|1|RON|4.769
Singapore|dollar|1|SGD|16.066
South Africa|rand|1|ZAR|1.227
South Korea|won|100|KRW|1.420
Sweden|krona|1|SEK|2.217
Switzerland|franc|1|CHF|25.852
Thailand|baht|100|THB|65.399
Turkey|lira|100|TRY|48.953
United Kingdom|pound|1|GBP|27.748
USA|dollar|1|USD|20.823
`;

describe('txtToJson function', () => {
  it('should properly convert a text document to JSON', () => {
    expect(txtToJson(EXAMPLE_DATA)).toMatchObject({
      AUD: { country: 'Australia', currency: 'dollar', amount: '1', code: 'AUD', rate: '13.825' },
      BRL: { country: 'Brazil', currency: 'real', amount: '1', code: 'BRL', rate: '3.850' },
      BGN: { country: 'Bulgaria', currency: 'lev', amount: '1', code: 'BGN', rate: '12.406' },
      CAD: { country: 'Canada', currency: 'dollar', amount: '1', code: 'CAD', rate: '15.083' },
      CNY: { country: 'China', currency: 'renminbi', amount: '1', code: 'CNY', rate: '2.946' },
      DKK: { country: 'Denmark', currency: 'krone', amount: '1', code: 'DKK', rate: '3.249' },
      EUR: { country: 'EMU', currency: 'euro', amount: '1', code: 'EUR', rate: '24.270' },
      HKD: { country: 'Hongkong', currency: 'dollar', amount: '1', code: 'HKD', rate: '2.676' },
      HUF: { country: 'Hungary', currency: 'forint', amount: '100', code: 'HUF', rate: '6.334' },
      ISK: { country: 'Iceland', currency: 'krona', amount: '100', code: 'ISK', rate: '16.310' },
      XDR: { country: 'IMF', currency: 'SDR', amount: '1', code: 'XDR', rate: '28.393' },
      INR: { country: 'India', currency: 'rupee', amount: '100', code: 'INR', rate: '23.126' },
      IDR: { country: 'Indonesia', currency: 'rupiah', amount: '1000', code: 'IDR', rate: '1.248' },
      ILS: { country: 'Israel', currency: 'new shekel', amount: '1', code: 'ILS', rate: '6.491' },
      JPY: { country: 'Japan', currency: 'yen', amount: '100', code: 'JPY', rate: '13.390' },
      MYR: { country: 'Malaysia', currency: 'ringgit', amount: '1', code: 'MYR', rate: '5.063' },
      MXN: { country: 'Mexico', currency: 'peso', amount: '1', code: 'MXN', rate: '1.145' },
      NZD: { country: 'New Zealand', currency: 'dollar', amount: '1', code: 'NZD', rate: '12.054' },
      NOK: { country: 'Norway', currency: 'krone', amount: '1', code: 'NOK', rate: '2.059' },
      PHP: { country: 'Philippines', currency: 'peso', amount: '100', code: 'PHP', rate: '35.245' },
      PLN: { country: 'Poland', currency: 'zloty', amount: '1', code: 'PLN', rate: '5.739' },
      RON: { country: 'Romania', currency: 'leu', amount: '1', code: 'RON', rate: '4.769' },
      SGD: { country: 'Singapore', currency: 'dollar', amount: '1', code: 'SGD', rate: '16.066' },
      ZAR: { country: 'South Africa', currency: 'rand', amount: '1', code: 'ZAR', rate: '1.227' },
      KRW: { country: 'South Korea', currency: 'won', amount: '100', code: 'KRW', rate: '1.420' },
      SEK: { country: 'Sweden', currency: 'krona', amount: '1', code: 'SEK', rate: '2.217' },
      CHF: { country: 'Switzerland', currency: 'franc', amount: '1', code: 'CHF', rate: '25.852' },
      THB: { country: 'Thailand', currency: 'baht', amount: '100', code: 'THB', rate: '65.399' },
      TRY: { country: 'Turkey', currency: 'lira', amount: '100', code: 'TRY', rate: '48.953' },
      GBP: { country: 'United Kingdom', currency: 'pound', amount: '1', code: 'GBP', rate: '27.748' },
      USD: { country: 'USA', currency: 'dollar', amount: '1', code: 'USD', rate: '20.823' },
    });
  });
});
