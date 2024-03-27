import styles from "./CardBook.module.css";

export default function CardBook({ book }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{book.title}</h3>
      <p className={styles.author}>Autor: {book.author}</p>
      <p className={styles.genre}>Gênero: {book.genre}</p>
    </div>
  );
}
