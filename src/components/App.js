import React from 'react';
import '../styles/App.css';

import Header from './Header'
import Banner from './Banner'
import Container from './Container'
import Footer from './Footer'

const App = () => (
  <div className="mainWrapper">
    <Header />
    <Banner />
    <Container />
    <Footer />
  </div>
)

export default App
