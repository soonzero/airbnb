import React from "react";
import styled from "styled-components";

export default function HomeCard(props) {
  const StMainContentCard = styled.div`
    height: 616px;
  `;

  const StContentCardPic = styled.div`
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 308px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background-image: ${props.cover};
  `;

  const StContentCardDesc = styled.div`
    padding: 24px 16px;
    color: white;
    height: 50%;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    box-sizing: border-box;
    background-color: ${props.color};
  `;

  const StContentCardLocation = styled.p`
    font-size: 35px;
    font-weight: 500;
    margin-bottom: 12px;
  `;

  const StContentCardDistance = styled.span`
    font-size: 20px;
    font-weight: 300;
  `;

  return (
    <StMainContentCard>
      <StContentCardPic cover={props.cover} />
      <StContentCardDesc color={props.color}>
        <StContentCardLocation>{props.location}</StContentCardLocation>
        <StContentCardDistance>{props.distance} 거리</StContentCardDistance>
      </StContentCardDesc>
    </StMainContentCard>
  );
}
