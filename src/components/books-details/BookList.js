import React from 'react';
import Book from './Book';

const BookList = () => {
  const books = [
    {
      title: 'Great Book',
      id: 1,
    },
    {
      title: 'Great Book 2',
      id: 2,
    },
    {
      title: 'Great Book 3',
      id: 3,
    },
  ];

  const renderedBooks = books.map((book) => (<Book book={book} key={book.id} />));

  return (
    <div className="books">
      {renderedBooks}
    </div>
  );
};

export default BookList;
