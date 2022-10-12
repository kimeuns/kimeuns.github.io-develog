import React, { useState, useEffect, useTransition, useDeferredValue} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Card, Row, Col, Nav} from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet} from "react-router-dom";
import styled from "styled-components";

import Home from './pages/Home'
import Info from './pages/components/Info'

import { useSelector, useDispatch } from "react-redux";
import './App.css';

function App() { 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>

        </Route>
      </Routes>
    </>
  )
}

function TabContent({ tab }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 500);
    return () => {
      setFade("");
    };
  }, [tab]);

  
}



export default App;