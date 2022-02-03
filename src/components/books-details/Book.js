import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../../redux/books/books';
import ProgressBar from './ProgressBar';

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
      <div className="ui-title">
        <div className="title">
          <h3>
            {title}
          </h3>
          <h4>
            {category}
          </h4>
        </div>
        <div className="interaction-btn">
          <button type="button" className="comments">Comments</button>
          <div className="line-btn" />
          <button type="button" className="remove-btn" onClick={removeBookFromStore}>Remove</button>
          <div className="line-btn" />
          <button type="button" className="edit">Edit</button>
        </div>
      </div>
      <ProgressBar />
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
