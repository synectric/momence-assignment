import { useCallback, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { NumberFormatValues } from 'react-number-format';
import { PulseLoader } from 'react-spinners';
import styled from 'styled-components';

import { H1, H3 } from './typography';
import { Table } from './table';
import { Form } from './form';
import { formatNumber } from '../utils';

const dateFormat = new Intl.DateTimeFormat(navigator.language, { year: 'numeric', month: 'numeric', day: '2-digit' });

type CurrencyRateKey = 'amount' | 'code' | 'country' | 'currency' | 'rate';
type CurrencyRate = Record<CurrencyRateKey, string>;
type CurrencyRatesResponse = Record<string, CurrencyRate>;

export const MainContent = () => {
  const { isPending, error, data } = useQuery<CurrencyRatesResponse, unknown, Array<CurrencyRate>>({
    queryKey: ['rates'],
    queryFn: () => fetch('http://localhost:1337').then((res) => res.json()),
    select: (data) => Object.values(data),
  });

  const [amount, setAmount] = useState(1);

  const handleChange = useCallback(({ floatValue }: NumberFormatValues) => {
    setAmount(floatValue ?? 1);
  }, []);

  const columns = useMemo(() => (data ? Object.keys(data[0]) : []) as Array<CurrencyRateKey>, [data]);

  const extendedData = useMemo(
    () =>
      data?.map(({ amount: currencyAmount, code, rate, ...currency }) => ({
        ...currency,
        amount: formatNumber(Number(currencyAmount)),
        code,
        rate: formatNumber(Number(rate)),
        converted: formatNumber((amount / Number(rate)) * Number(currencyAmount)),
      })),
    [amount, data]
  );

  return (
    <Wrapper>
      <H1>Daily exchange rates for {dateFormat.format()}</H1>
      <Form amount={amount} onChange={handleChange} />
      {error ? (
        <H3>Something went wrong, please, try again</H3>
      ) : isPending || !extendedData ? (
        <PulseLoader />
      ) : (
        <Table columns={[...columns, 'converted']} rows={extendedData} />
      )}
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  align-items: center;
  background: ${({ theme: { palette } }) => palette.background.content};
  border-radius: 64px;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  gap: 32px;
  max-width: 1280px;
  padding: 64px;
`;
