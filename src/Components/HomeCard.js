import React from "react";
import styled from "styled-components";
const StMainContentCard = styled.div`
  height: 100%;
`;

const StContentCardPic = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-image: ${(props) => props.cover};
  display: grid;
  position: relative;
  grid-template-columns: minmax(0px, 1fr);
  grid-template-rows: minmax(0px, 1fr);

  &::before {
    content: "";
    padding-top: 66.6667%;
    width: 100%;
    grid-row-start: 1;
    grid-column-start: 1;
    grid-row-end: 1;
    grid-column-end: 1;
  }
`;

const StContentCardDesc = styled.div`
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-sizing: border-box;
  background-color: ${(props) => props.color};
  display: grid;
  position: relative;
  grid-template-columns: minmax(0px, 1fr);
  grid-template-rows: minmax(0px, 1fr);

  &::before {
    content: "";
    padding-top: 66.6667%;
    width: 100%;
    grid-row-start: 1;
    grid-column-start: 1;
    grid-row-end: 1;
    grid-column-end: 1;
  }
`;

const StContentDescContainer = styled.div`
  padding: 24px 16px 16px;
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 1;
  grid-column-end: 1;

  @media screen and (max-width: 1440px) {
    padding: 20px 16px 16px;
  }
`;

const StContentCardLocation = styled.p`
  font-size: 35px;
  line-height: 1.1142857143;
  font-weight: 500;
  margin-bottom: 12px;
  color: white;

  @media screen and (max-width: 1440px) {
    font-size: 27px;
    line-height: 1.1111111111;
    margin-bottom: 8px;
  }

  @media screen and (max-width: 1128px) {
    font-size: 23px;
    line-height: 1.1304347826;
    margin-bottom: 8px;
  }

  @media screen and (max-width: 744px) {
    font-size: 20px;
    line-height: 1.15;
    margin-bottom: 8px;
  }
`;

const StContentCardDistance = styled.span`
  font-size: 20px;
  line-height: 1.3;
  font-weight: 300;
  color: white;

  @media screen and (max-width: 1440px) {
    font-size: 15px;
    line-height: 1.3333333333;
  }
`;
export default function HomeCard(props) {
  return (
    <StMainContentCard>
      <StContentCardPic cover={props.cover} />
      <StContentCardDesc color={props.color}>
        <StContentDescContainer>
          <StContentCardLocation>{props.location}</StContentCardLocation>
          <StContentCardDistance>{props.distance} 거리</StContentCardDistance>
        </StContentDescContainer>
      </StContentCardDesc>
    </StMainContentCard>
  );
}
