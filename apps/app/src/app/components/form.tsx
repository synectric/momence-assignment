import styled from 'styled-components';
import { Body3, Body4 } from './typography';

export const Form = () => {
  return (
    <Main>
      <Body4>Enter the amount to convert:</Body4>
      <Input name="amount" type="number" />
      <Body3 style={{ marginLeft: '-8px' }}>CZK</Body3>
    </Main>
  );
};

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
  font-family: 'Epilogue', sans-serif;
  font-size: 20px;
  height: 48px;
  text-align: right;
  width: 300px;
`;
