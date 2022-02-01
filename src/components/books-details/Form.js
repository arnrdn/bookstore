import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addNewBook = (e) => {
    e.preventDefault();
    if (title === '' || author === '') return;
    const newBook = {
      id: Math.random().toString(16).slice(2),
      title,
      author,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form">
      <h2>Add new book</h2>
      <form>
        <input type="text" className="book-title" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" className="book-category" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <button type="submit" className="book-submit" onClick={addNewBook}>Add Book</button>
      </form>
    </div>
  );
};
export default Form;
