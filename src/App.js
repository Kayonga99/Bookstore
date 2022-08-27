import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import BooksPage from './components/BookPage';

const App = () => (
  <div className="App">
    <nav>
      <h1> Bookstore CMS</h1>
      <ul>
        <li>
          <Link
            to="/"
            className="active"
          >
            Books
          </Link>
        </li>
        <li>
          <Link
            to="/categories"
          >
            CATEGORIES
          </Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route exact path="/" element={<BooksPage />} />
      <Route exact path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
