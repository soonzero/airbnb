import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.5;
  z-index: 1000;
`;

export default function Blackout({ onSetIsVisible }) {
  return <Background onClick={() => onSetIsVisible(false)} />;
}
