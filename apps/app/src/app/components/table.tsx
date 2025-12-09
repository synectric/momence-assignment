import styled from 'styled-components';

type Props<Column extends string> = {
  columns: Array<Column>;
  rows: Array<Record<Column, string>>;
};

export const Table = <Column extends string>({ columns, rows }: Props<Column>) => {
  return (
    <Main title="Table">
      <Header>
        {columns.map((column) => (
          <div key={column}>{column}</div>
        ))}
      </Header>
      {rows.map((row) => (
        <Row key={JSON.stringify(row)}>
          {Object.entries<string>(row).map(([key, cell]) => (
            <div key={`${JSON.stringify(row)}-${key}-${cell}`}>{cell}</div>
          ))}
        </Row>
      ))}
    </Main>
  );
};

const Main = styled.div`
  background: ${({ theme: { palette } }) => palette.background.accent};
  border-radius: 32px;
  border: 1px solid ${({ theme: { palette } }) => palette.border};
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  padding: 0 32px;
  text-transform: capitalize;
  width: 100%;
`;

const Row = styled.div`
  border-bottom: 1px solid ${({ theme: { palette } }) => palette.border};
  display: flex;
  font-size: 20px;
  justify-content: space-around;
  line-height: 1.1em;
  padding: 16px 0;
  margin: 0 -32px;

  &:last-child {
    border-bottom: none;
  }

  div {
    flex: 1 0 0;
    text-align: center;
  }
`;

const Header = styled(Row)`
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  background: ${({ theme: { palette } }) => palette.background.accentDark};
  font-weight: 600;
`;
