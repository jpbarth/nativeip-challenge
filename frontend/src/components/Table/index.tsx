import * as S from "./styles";

interface TableProps {
  selectedPage: number;
  totalPages: number;
  columns: string[];
  content: any;
  setPage: any;
}

function Table({
  selectedPage,
  totalPages,
  columns,
  content,
  setPage,
}: TableProps) {
  const header = columns.map((column) => <th key={column}>{column}</th>);

  const pages = Array.from(
    { length: totalPages ?? 1 },
    (_, index) => index + 1
  );

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const pagingDots = pages?.map((page) => (
    <button
      key={page}
      onClick={() => handlePageChange(page)}
      disabled={selectedPage === page}
      type="button"
    >
      {page}
    </button>
  ));

  return (
    <S.TableWrapper>
      <S.Table>
        <thead>
          <tr>{header}</tr>
        </thead>
        <tbody>{content}</tbody>
      </S.Table>
      <S.PagingWrapper>
        <p>
          Showing page: {selectedPage} of {totalPages}
        </p>
        <S.DotsWrapper>{pagingDots}</S.DotsWrapper>
      </S.PagingWrapper>
    </S.TableWrapper>
  );
}

export { Table };
