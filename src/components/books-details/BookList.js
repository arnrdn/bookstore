import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { fetchBookApi } from '../../redux/books/books';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookApi());
  }, [dispatch]);

  return (
    <div className="books">
      {books.length ? (books.map((book) => (
        <Book book={book} key={book.id} />
      ))) : (
        <h3 className="no-books">Add your first book here :&#41;</h3>
      )}
      <div className="line" />
    </div>
  );
};

export default BookList;
