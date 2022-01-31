import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    book: {
      title,
    },
  } = props;

  return (
    <div className="book-container">
      <h3 className="title">
        {title}
      </h3>
      <button type="button" className="remove-btn">Remove</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};

export default Book;
