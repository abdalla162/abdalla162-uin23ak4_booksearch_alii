import React from 'react'
import Bookcard from './BookCard'



export default function SearchResults({ books }) {
  return (
    <div className="results-grid">
      {books.map((book, index) => (
        <Bookcard
          key={index}
          keyBook={book.key || index}
          title={book.title}
          first_publish_year={book.first_publish_year}
          author_name={book.author_name ? book.author_name.join(', ') : 'Ukjent'}
          ratings_average={book.ratings_average ? book.ratings_average : "Ikke tilgjengelig"}
          coverImage={
            book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
              : `http://via.placeholder.com/640x360`
          }
        />
      ))}
    </div>
  );
}



