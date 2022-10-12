import React, { useState, useEffect, useTransition, useDeferredValue} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Card, Row, Col, Nav} from 'react-bootstrap';
import styled from "styled-components";
import Info from './components/Info'

import { useSelector, useDispatch } from "react-redux";

const TestBox = styled.div`
  width: 100%;
  height: 200px;
  padding: 24px 0 27px;
  border-bottom: 1px solid #eee;
  margin:0;
`;

const ContentBox = styled.div`
  font-size: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  word-wrap: break-word;
`;
const ImgBox = styled.img`
    width: 120px;
    height: 120px;
    object-fit: cover;
`;

function Home(){
  let { post } = useSelector((state) => state);
  let dispatch = useDispatch();

  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState("");
  let [idx, setIdx] = useState(0);

  const [tab, setTab] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h3> Develo</h3>
      </div>
      <div style={{ height: "200px" }}></div>
      <Container style={{ width: "700px" }} fluid="sm">
        <Nav
          variant="tabs"
          className="justify-content-center"
          style={{ textAlign: "center" }}
        >
          <Nav.Item className="col-sm-4">
            <Nav.Link
              eventKey="link0"
              onClick={() => {
                setTab(0);
              }}
            >
              자기소개
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="col-sm-4">
            <Nav.Link
              eventKey="link1"
              onClick={() => {
                setTab(1);
              }}
            >
              글 <span>{post.length} </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="col-sm-4">
            <Nav.Link
              eventKey="link2"
              onClick={() => {
                setTab(2);
              }}
            >
              작품
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {/* <TabContent tab={tab} postList={postList}></TabContent> */}

        {post.map((value, i) => {
          return (
            <TestBox
              className="row"
              style={{ justifyContent: "space-between" }}
            >
              <div className="col-sm-9 col-xs- px-0">
                <p style={{ fontSize: "20px" }}>{value.title}</p>
                <ContentBox>
                  {value.body}
                </ContentBox>
                <div></div>
              </div>

              <ImgBox
                className="col-sm-3 mt-2 px-0"
                src={value.img}
              ></ImgBox>
            </TestBox>
          );
        })}
      </Container>
    </div>
  );
}

export default Home;