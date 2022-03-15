import React from "react";
import FixedHeader from "../Components/FixedHeader";
import Sign from "../Components/Sign";
import Footer from "../Components/Footer";
import BottomNavBar from "../Components/BottomNavBar";
import styled from "styled-components";

const StMainContainer = styled.div`
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
`;

const StLoginContainer = styled.main`
  box-sizing: border-box;

  & > div {
    display: block;
    box-sizing: border-box;

    & > div {
      padding: 40px;
      display: flex;
      justify-content: center;
      box-sizing: border-box;

      & > div {
        margin: 32px 0;
        box-sizing: border-box;
      }
    }
  }
`;

export default function Login() {
  return (
    <>
      <StMainContainer>
        <FixedHeader modal="false" fixed="false" height="80px" />
        <StLoginContainer>
          <div>
            <div>
              <div>
                <Sign />
              </div>
            </div>
          </div>
        </StLoginContainer>
      </StMainContainer>
      <Footer display="none" />
      <BottomNavBar now="login" />
    </>
  );
}
