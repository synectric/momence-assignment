import styled from 'styled-components';
import { H1 } from './typography';
import { Table } from './table';
import { Form } from './form';

const dateFormat = new Intl.DateTimeFormat(navigator.language, { year: 'numeric', month: 'numeric', day: '2-digit' });

export const MainContent = () => {
  return (
    <Wrapper>
      <H1>Daily exchange rates for {dateFormat.format()}</H1>
      <Form />
      <Table columns={['hello', 'world']} rows={[{ hello: 'Me', world: 'You' }]} />
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
