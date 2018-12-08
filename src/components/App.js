import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/App.css';
import * as Routes from './Routes';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Routes.BreedList} />
        <Route path="/:breedActive" component={Routes.DogList} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
