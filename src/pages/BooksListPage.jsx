import { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import style from './BooksListPage.module.css';

export default function BooksListPage() {
  const [books, setBooks] = useState([]);
  const [state, setState] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    fetch('https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const booksList = Object.values(data);
        setBooks(booksList);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);

  const filterBooksList = books.filter((book) => {
    if (state) {
      return book.title.toLowerCase().includes(state.toLowerCase()) ||
        book.author.toLowerCase().includes(state.toLowerCase());
    }
    return book.genre.toLowerCase().includes(genre.toLowerCase());
  });

  return (
    <div className={style.body}>
      <div className={style.containerInput}>
        <input
          className={style.inputStyle}
          type="text"
          onChange={(event) => setState(event.target.value)}
          placeholder='Pesquisar'
          data-cy="inputBusca"
        />
        <select
          className={style.selectStyle}
          name="FilterGenre"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
          data-cy="selectFilter"
        >
          <option
            value=""
            data-cy="optionFilter"
          >
            Escolha um gênero
          </option>
          <option value="Ficção Distópica" data-cy="optionFilter">
            Ficção Distópica
          </option>
          <option value="Realismo Mágico" data-cy="optionFilter">
            Realismo Mágico
          </option>
          <option value="Romance Clássico" data-cy="optionFilter">
            Romance Clássico
          </option>
          <option value="Fantasia" data-cy="optionFilter">
            Fantasia
          </option>
          <option value="Alegoria Política" data-cy="optionFilter">
            Alegoria Política
          </option>
          <option value="Suspense" data-cy="optionFilter">
            Suspense
          </option>
        </select>
      </div>
      <div className={style.containerFlex}>
        <BookList books={filterBooksList} />
      </div>
    </div>
  );
}
