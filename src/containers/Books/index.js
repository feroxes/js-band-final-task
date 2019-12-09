import React from 'react';
import Menu from '../../components/Menu';
import BooksList from '../../components/BooksList';

function Books() {
  return (
    <div className="p-4">
      <Menu />
      <BooksList />
    </div>
  );
}

export default Books;
