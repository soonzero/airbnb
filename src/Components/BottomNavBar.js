import React from "react";
import styled from "styled-components";
import { ReactComponent as Magnifier } from "../img/magnifier.svg";
import { ReactComponent as Wish } from "../img/wish.svg";
import { ReactComponent as Login } from "../img/login_flex.svg";
import { Link } from "react-router-dom";

const StNavBarWrapper = styled.nav`
  display: none;

  @media screen and (max-width: 744px) {
    display: flex;
    align-items: center;
    border-top: 1px solid #ebebeb;
    position: fixed;
    bottom: -60px;
    height: 125px;
    left: 0px;
    right: 0px;
    padding-bottom: 60px;
    background-color: white;
    z-index: 1;
    box-sizing: border-box;
  }
`;

const StNavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 560px;
`;

const StLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StIconContainer = styled.div`
  margin-bottom: 2px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StIconDesc = styled.div`
  font-size: 10px;
  line-height: 1.2;
  font-weight: 600;
  overflow-wrap: break-word;
  color: #222222;
`;

export default function BottomNavBar() {
  return (
    <StNavBarWrapper>
      <StNavBarContainer>
        <Link
          to="/"
          style={{ maxWidth: "20%", textDecoration: "none", flex: "1 1 0px" }}
        >
          <StLink>
            <div>
              <StIconContainer>
                <Magnifier strokeWidth="4" stroke="#ff385c" />
              </StIconContainer>
            </div>
            <StIconDesc>둘러보기</StIconDesc>
          </StLink>
        </Link>
        <Link
          to="/"
          style={{ maxWidth: "20%", textDecoration: "none", flex: "1 1 0px" }}
        >
          <StLink>
            <div>
              <StIconContainer>
                <Wish fill="none" strokeWidth="2.66667" stroke="#b0b0b0" />
              </StIconContainer>
            </div>
            <StIconDesc>위시리스트</StIconDesc>
          </StLink>
        </Link>
        <Link
          to="/"
          style={{ maxWidth: "20%", textDecoration: "none", flex: "1 1 0px" }}
        >
          <StLink>
            <div>
              <StIconContainer>
                <Login fill="#b0b0b0" />
              </StIconContainer>
            </div>
            <StIconDesc>로그인</StIconDesc>
          </StLink>
        </Link>
      </StNavBarContainer>
    </StNavBarWrapper>
  );
}
