import React, { useState, useEffect, useTransition, useDeferredValue} from 'react';
import {Container, Card, Row, Col, Nav} from 'react-bootstrap';
import styled from "styled-components";

import './App.css';

const TestBox = styled.div`
  width: 100%;
  height: 200px;
  background: yellow;
  padding: 24px 0 27px;
`;