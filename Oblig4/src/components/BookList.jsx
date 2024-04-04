import React from 'react'

export default function BookList({ books, searchTerm }) {
  return (
    <div className="book-list-container">
      <h2>Bøker funnet for "{searchTerm.replace(/\+/g, ' ')}"</h2>
      {books.slice(0, 15).map((book, index) => (
        <div key={index} className="book">
          <h3 className="book-title">{book?.title}</h3>
          <p className="book-author">Forfatter: {book?.author_name?.join(', ')}</p>
          <p className="book-year">Første utgivelsesår: {book?.first_publish_year}</p>

        </div>
      ))}
    </div>
  );
}
