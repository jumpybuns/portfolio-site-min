import styled from "styled-components";

export const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-right: 15px;
`;

export const Slider = styled.span`
  position: absolute;
  top: 0;
  display: block;
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: #ccc;
  border-radius: 34px;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    margin: 4px;
    background-color: white;
    border-radius: 50%;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;

  &:checked + ${Slider} {
    background-color: #2196f3;
  }

  &:checked + ${Slider}::before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196f3;
  }
`;
