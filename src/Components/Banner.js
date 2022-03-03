import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/* banner */

const StBanner = styled.div`
  width: 100vw;
  height: 50px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StBannerText = styled.span`
  color: white;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
`;

export default function Banner() {
  return (
    <StBanner>
      <Link to="/covid">
        <StBannerText>
          에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.
        </StBannerText>
      </Link>
    </StBanner>
  );
}
