import React, { Component } from 'react';
//Must import css and initialize JS for materilize to work
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import './index.css';

import Header from './components/Header';
import PhotoGrid from './components/PhotoGrid';
import Tabs from './components/Tabs';
import Parallax from './components/Parallax';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import street from "../src/img/street.jpg"
import water from "../src/img/water.jpg"

class App extends Component {
  state = {}
  componentDidMount() {
    // Auto initialize all the things for materialize.
    M.AutoInit();
  }

  render() {
    return (<div>
      <Header />

      <PhotoGrid />
      <Parallax pimage={street} />
      <Tabs />
      <Parallax pimage={water} />
      <ContactForm />
      <Footer />
    </div>


    )
  }

}
export default App;
