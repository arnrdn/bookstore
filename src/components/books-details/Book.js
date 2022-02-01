import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const Book = (props) => {
  const {
    book: {
      id,
      title,
      author,
    },
  } = props;

  const dispatch = useDispatch();

  const removeBookFromStore = () => {
    dispatch(removeBook({ id }));
  };

  return (
    <div className="book-container" id={id}>
      <h3 className="title">
        {title}
      </h3>
      <h3 className="author">
        {author}
      </h3>
      <button type="button" className="remove-btn" onClick={removeBookFromStore}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
