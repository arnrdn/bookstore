import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);

  return (
    <div className="books">
      {books.length ? (books.map((book) => (
        <Book book={book} key={book.id} />
      ))) : (
        <h3>No books here</h3>
      )}
    </div>
  );
};

export default BookList;
