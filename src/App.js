import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import BooksPage from './components/BookPage';

const App = () => (
  <div className="navigation_container">
    <nav className="navigation d_flex">
      <ul className="d_flex">
        <li><h1><Link to="/">Bookstore CMS</Link></h1></li>
        <li><Link to="/">BOOKS</Link></li>
        <li><Link to="/categories">CATEGORIES</Link></li>
      </ul>
      <span className="user-profile-wrapper d_flex">
        <FaUserAlt style={{
          color: '#0290ff',
          height: '15px',
          cursor: 'pointer',
          transition: 'all ease-in 300ms',
        }}
        />
      </span>
    </nav>
    <Routes>
      <Route exact path="/" element={<BooksPage />} />
      <Route exact path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
