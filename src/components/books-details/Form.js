import React from 'react';

const Form = () => (
  <div className="form">
    <h2>Add new book</h2>
    <form>
      <input type="text" className="book-title" placeholder="Book title" />
      <input type="text" className="book-category" placeholder="Category" />
      <button type="submit" className="book-submit">Add Book</button>
    </form>
  </div>
);

export default Form;
