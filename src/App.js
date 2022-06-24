import React, { useEffect } from 'react';
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {

      if(authUser)
      {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {

        dispatch({
          type: 'SET_USER',
          user: null
        })

      }

    })
  }, [])


  return (
    // BEM
    <Router>
      <div className="app">
        
        <Routes>
          <Route path="/login" element={[<Login />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]}/>
          <Route path="/" element={[<Header />, <Home />]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;