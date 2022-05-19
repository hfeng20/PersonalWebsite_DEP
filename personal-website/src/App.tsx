import React from 'react';
import logo from './logo.svg';
import musician from './musician.JPG'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Routes} from "react-router-dom";
import MainPage from './Pages/MainPage';
import Musician from './Pages/Musician';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/Musician" element={<Musician/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;