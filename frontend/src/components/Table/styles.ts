import styled from "styled-components";

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Table = styled.table`
  th {
    font-weight: bold;
    text-align: left;
  }

  tr td:last-of-type,
  tr th:last-of-type {
    text-align: right;
  }

  tbody {
    height: 10rem;
  }
`;

const PagingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DotsWrapper = styled.div`
  display: flex;
  gap: 0.25rem;

  button {
    width: 25px;
    height: 25px;

    cursor: pointer;

    border-radius: 4px;

    &:disabled {
      cursor: default;
    }
  }
`;

export { DotsWrapper, Table, TableWrapper, PagingWrapper };
