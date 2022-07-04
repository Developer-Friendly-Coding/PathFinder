import styled from "styled-components";

export const StyledHeader = styled.header`
  grid-area: header;
  background-color: #fee9b2;
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: right;
`;

export const TopButton = styled.button`
  height: 40px;
  width: 100px;
  color: black;
  background: #f9fce1;
  font-size: 1rem;
  border: none;
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(0, 79, 255, 0.3);
  transition: 0.3s;
  margin-right: 5px;
  &:hover {
    background: #fbd1b7;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 79, 255, 0.6);
  }
`;
export const Img = styled.img`
  display: block;
  margin: auto;
`;

export const Search = styled.div`
  text-align: center;
`;

export const SearchText = styled.input`
  height: 100%;
  width: 800px;
  border: 0;
  border-radius: 15px;
  font-size: 25px;
  background-color: rgb(233, 233, 233);
  outline: none;
  &::placeholder {
    font-size: 1.3rem;
  }
`;

export const SearchButton = styled.button`
  position: relative;
  bottom: 5px;
  height: 40px;
  color: black;
  background: #f9fce1;
  font-size: 1.2rem;
  border: none;
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(0, 79, 255, 0.3);
  transition: 0.3s;
  width: 100px;
  padding: 0px;
  margin: 0px;
  &:hover {
    background: #fbd1b7;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 79, 255, 0.6);
  }
`;

export const OrderButton1 = styled.button`
  position: relative;
  bottom: 5px;
  height: 40px;
  color: black;
  background: #f9fce1;
  font-size: 1.2rem;
  border: none;
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(0, 79, 255, 0.3);
  transition: 0.3s;
  width: 130px;
  padding: 0px;
  margin: 0px;
  &:hover {
    background: #fbd1b7;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 79, 255, 0.6);
  }
  margin-right: 10px;
`;
export const OrderButton2 = styled.button`
  position: relative;
  bottom: 5px;
  height: 40px;
  color: black;
  background: #f9fce1;
  font-size: 1.2rem;
  border: none;
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(0, 79, 255, 0.3);
  transition: 0.3s;
  width: 130px;
  padding: 0px;
  margin: 0px;
  &:hover {
    background: #fbd1b7;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 79, 255, 0.6);
  }
  margin-right: 50px;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
`;
export const ModalContent = styled.div`
  position: relative;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  z-index: 5;
  width: 800px;
  height: 360px;
  margin: auto;
  top: 100px;
  text-align: center;
`;
export const ModalText = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalTitle = styled.h1`
  font-size: 20px;
`;

export const ModalFont = styled.label`
  font-size: 20px;
`;
