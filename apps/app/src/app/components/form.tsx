import { NumberFormatValues, NumericFormat } from 'react-number-format';
import styled from 'styled-components';

import { Body3, Body4 } from './typography';
import { getLocaleSettings } from '../utils';

type Props = {
  amount: number;
  onChange: (values: NumberFormatValues) => void;
};

const { decimalSeparator, thousandSeparator } = getLocaleSettings();

export const Form = ({ amount, onChange }: Props) => (
  <Main title="Form">
    <Body4>Enter the amount to convert:</Body4>
    <NumericFormat
      allowLeadingZeros={false}
      allowNegative={false}
      allowedDecimalSeparators={[decimalSeparator]}
      customInput={Input}
      decimalScale={2}
      inputProps={{ inputMode: 'decimal' }}
      isAllowed={({ value }) => value.length < 25}
      name="amount"
      onValueChange={onChange}
      thousandSeparator={thousandSeparator}
      value={amount}
    />
    <Body3 style={{ marginLeft: '-8px' }}>CZK</Body3>
  </Main>
);

const Main = styled.div`
  align-items: center;
  background: ${({ theme: { palette } }) => palette.background.main};
  border-radius: 32px;
  color: ${({ theme: { palette } }) => palette.background.content};
  display: flex;
  gap: 16px;
  padding: 32px;
`;

const Input = styled.input`
  border-radius: 8px;
  border: none;
  font-family: 'Epilogue', sans-serif;
  font-size: 20px;
  height: 48px;
  padding: 8px;
  text-align: right;
  width: 300px;
`;
