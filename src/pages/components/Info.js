import React, { useState, useEffect, useTransition, useDeferredValue} from 'react';
import {Container, Card, Row, Col, Nav} from 'react-bootstrap';
import styled from "styled-components";

const TestBox = styled.div`
  width: 100%;
  height: 200px;
  background: yellow;
  padding: 24px 0 27px;
`;

function Info(){
    return(
        <>
            <div>Info 작성 예정</div>
        </>
    )
}

export default Info