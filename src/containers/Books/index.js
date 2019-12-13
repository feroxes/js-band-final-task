import React from 'react';
import Menu from '../../components/Menu';
import BooksList from '../../components/BooksList';

function Books({ ...props }) {
  return (
    <div className="p-4">
      <Menu />
      <BooksList {...props} />
    </div>
  );
}

export default Books;
