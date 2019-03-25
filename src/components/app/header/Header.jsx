import BrandTitle from 'app/brandTitle/BrandTitle';
import React from 'react';
import './header.css';

export default () => (
    <div className="header justify-content-center">
        <BrandTitle className="header__brand-title brand-title_color-red" />
    </div>
);