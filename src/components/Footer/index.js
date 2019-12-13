import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="position-absolute fixed-bottom text-center">
      <span>
        <code>
          <Link to="/books">JS Band store </Link>
          created by <a href="https://github.com/feroxes/">Yarik Harmash</a>
        </code>
      </span>
    </div>
  );
}

export default Footer;
