import React from 'react';
import MovieNew from './movieNew';
import Films from './films';
import Multfilms from './multfilms';

const Categories = () => {
    return (
      <div className="category">
        <MovieNew/>
        <Films />
        <Multfilms />
      </div>
      
    )
}


export default Categories;