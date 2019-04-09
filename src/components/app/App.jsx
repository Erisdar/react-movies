import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import './app.css';
import Content from './content/Content';
import Footer from './footer/Footer';
import Header from './header/Header';

export const App = () => (
    <>
        <Header />
        <Content />
        <Footer />
    </>
);

ReactDom.render(<App />, document.getElementsByClassName("app")[0]);
