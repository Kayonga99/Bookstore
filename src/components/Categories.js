import React from 'react';
import { useSelector } from 'react-redux';

const Categories = () => {
  const categories = useSelector((state) => state.checkReducer.categories);

  return (

    <div>
      <h2>{categories}</h2>
    </div>
  );
};

export default Categories;
