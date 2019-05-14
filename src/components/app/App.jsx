import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './app.css';
import Content from './content/ContentContainer';
import Footer from './footer/Footer';
import Header from './header/Header';

export default () => (
    <>
        <Header />
        <Content />
        <Footer />
    </>
);