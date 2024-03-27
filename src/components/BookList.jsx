import CardBook from './CardBook/CardBook';

export default function BookList({ books }) {
  return (
    <div>
      <ul>
        {books && books.length > 0 ? (
          books.map((book, index) => (
            <li key={index} data-cy='booksListItem'>
              <CardBook book={book} />
            </li>
          ))
        ) : (
          <li>Nenhum livro encontrado</li>
        )}
      </ul>
    </div>
  )
}
