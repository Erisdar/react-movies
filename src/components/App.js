import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import '../styles/app.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const App = () => (
    <>
        <Header />
        <Content />
        <Footer />
    </>
);

ReactDom.render(<App />, document.getElementsByClassName("app")[0]);
