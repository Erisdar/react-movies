import React from 'react';
import './filmImage.css';

export default ({ logo, alt }) => {
    return <img src={require(`img/${logo}`)} alt={alt} className="film-item__film-image" />;
}

