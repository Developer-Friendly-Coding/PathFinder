import React from "react";
import {
  StyledHeader,
  FlexDiv,
  Search,
  Img,
  SearchText,
  SearchButton,
  OrderButton1,
  OrderButton2,
  TopButton,
  ModalOverlay,
  ModalContent,
  ModalText,
  ModalTitle,
  ModalFont,
} from "./StyledHeader";
const Header = () => {
  return (
    <StyledHeader>
      <div className="logo">Baner</div>
      <div className="menu">
        <div>홈</div>
        <div>소개</div>
        <div>포스트</div>
      </div>
    </StyledHeader>
  );
};

export default Header;
