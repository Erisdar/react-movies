import React from 'react';
import '../../styles/film/filmImage.css';

export default ({logo, alt}) => (
    <img src={require(`../../img/${logo}`)} alt={alt} className="film-logo" />
);