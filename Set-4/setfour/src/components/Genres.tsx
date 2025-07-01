import { useState } from "react";

type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
};
type Props = {
  books: Book[];
};

const Genres = ({ books }: Props) => {
  const [selectedGenre, setSelectedGenre] = useState<string>("All");

  // Get unique genres
  const genres = Array.from(new Set(books.map((book) => book.genre)));

  // Filter books based on selected genre
  const filteredBooks =
    selectedGenre === "All"
      ? books
      : books.filter((book) => book.genre === selectedGenre);

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setSelectedGenre("All")}>All</button>
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            style={{
              marginLeft: "8px",
              fontWeight: selectedGenre === genre ? "bold" : "normal",
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <b>{book.title}</b> {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genres;
