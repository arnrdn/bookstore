import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookToApi } from '../../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const addNewBook = (e) => {
    e.preventDefault();
    if (title === '' || category === '') return;
    const newBook = {
      id: Math.random().toString(16).slice(2),
      title,
      category,
    };
    dispatch(addBookToApi(newBook));
    setTitle('');
    setCategory('');
  };

  return (
    <div className="form">
      <h2>Add new book</h2>
      <form onSubmit={(e) => addNewBook(e)}>
        <input type="text" className="book-title" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" className="book-category" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
        <button type="submit" className="book-submit">Add Book</button>
      </form>
    </div>
  );
};
export default Form;
