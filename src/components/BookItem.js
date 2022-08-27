import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/books';

function BookItem() {
  const bookStore = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };
  return (
    bookStore.map((book) => (
      <li key={book.id}>
        <span>
          {' '}
          {book.title}
          {' '}
        </span>
        <span>
          {' '}
          {book.author}
          {' '}
        </span>

        {' '}
        <button type="button" onClick={() => handleRemove(book.id)}>REMOVE</button>
      </li>
    ))

  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    booktitle: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
