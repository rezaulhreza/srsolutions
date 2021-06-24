import React from 'react';
import '../Styles/App.css';
import { Route } from 'react-router-dom';
import Navbar from './Navbar';
import Carouseldisplay from './Carouseldisplay';
import Card from './Card';
import Clients from './Clients'
import Footer from './Footer'
import Contact from './Contact'


function App() {
  return (
    <>
    <Route exact path='/' render={() =>  <div className="App"> <Navbar contactIsActive={true} /> <Carouseldisplay /> <Card /> <Clients /> <Footer /> </div>} />
    <Route exact path='/contact' render={ () => <div className="App"> <Navbar /> <Contact /> <Footer /> </div> }  />
    </>
    );
}

export default App;
