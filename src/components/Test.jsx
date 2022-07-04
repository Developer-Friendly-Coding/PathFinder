import React, { useState, useEffect } from "react";
import logo_hedaer from "../img/pathfinder.png";
import {
  NavBar,
  Main,
  SideBar,
  ContentBox,
  Content1,
  Content2,
  Content3,
  Footer,
  Container,
  Container2,
  Container3,
  Img,
  Header_div1,
} from "./StyledTest";
const Test = () => {
  const [PostArray, setPostArray] = useState([]);

  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(20);
  const [scoreOrder, setScoreOrder] = useState("");
  const [end, setEnd] = useState(0);
  // &wheres=%EB%8F%99%EA%B5%AC
  //지점 회사소개 FAQ 상담받기
  const AddPost = () => {
    setSkip(end);
  };

  return (
    <Container>
      <NavBar>
        <div>
          <Container2>
            <Img src={logo_hedaer} />
          </Container2>
          <Container3>
            <Header_div1>지점</Header_div1>
            <Header_div1>회사소개</Header_div1>
            <Header_div1>FAQ</Header_div1>
            <Header_div1>상담받기</Header_div1>
          </Container3>
        </div>
      </NavBar>
      <Main>Main</Main>
      <SideBar>SideBar</SideBar>
      <ContentBox>
        <Content1>Content1</Content1>
        <Content2>Content2</Content2>
        <Content3>Content3</Content3>
      </ContentBox>
      <Footer>Footasdder</Footer>
    </Container>
  );
};

export default Test;
