import React from 'react';
import Menu from '../../components/Menu';
import BookList from '../../components/BookList';

function Books() {
  return (
    <div className="p-4">
      <Menu />
      <BookList />
    </div>
  );
}

export default Books;
