import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../../redux/books/books';

const Book = (props) => {
  const {
    book: {
      id,
      title,
      category,
    },
  } = props;

  const dispatch = useDispatch();

  const removeBookFromStore = () => {
    dispatch(removeBookFromApi({ id }));
  };

  return (
    <div className="book-container" id={id}>
      <h3 className="title">
        {title}
      </h3>
      <h3 className="author">
        {category}
      </h3>
      <button type="button" className="remove-btn" onClick={removeBookFromStore}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
