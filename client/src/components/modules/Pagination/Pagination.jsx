export default function Pagination({
  currentPage,
  cardsPerPage,
  totalCards,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {!pageNumbers.length ? (
          true
        ) : (
          <button
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
          >
            PREV
          </button>
        )}
        {pageNumbers.map((p) => {
          return (
            <button onClick={() => paginate(p)} key={p}>
              {p}
            </button>
          );
        })}
        {!pageNumbers.length ? (
          true
        ) : (
          <button
            disabled={currentPage + 1 > pageNumbers[pageNumbers.length - 1]}
            onClick={() => paginate(currentPage + 1)}
          >
            NEXT
          </button>
        )}
      </ul>
    </nav>
  );
}
