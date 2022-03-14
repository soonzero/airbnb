import React from "react";
import styled from "styled-components";

const StMainContentCard = styled.div`
  height: 100%;

  & > div {
    display: grid;
    position: relative;
    grid-template-columns: minmax(0px, 1fr);
    grid-template-rows: minmax(0px, 1fr);
    width: 100%;

    &::before {
      content: "";
      padding-top: 66.6667%;
      width: 100%;
      grid-row-start: 1;
      grid-column-start: 1;
      grid-row-end: 1;
      grid-column-end: 1;
    }
  }

  & > div:first-child {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background-image: ${(props) => props.cover};
  }

  & > div:last-child {
    background-color: ${(props) => props.color};
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;

    & > div {
      padding: 24px 16px 16px;
      grid-row-start: 1;
      grid-column-start: 1;
      grid-row-end: 1;
      grid-column-end: 1;

      @media screen and (max-width: 1440px) {
        padding: 20px 16px 16px;
      }

      & > p {
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
      }

      & > span {
        font-size: 20px;
        line-height: 1.3;
        font-weight: 300;
        color: white;

        @media screen and (max-width: 1440px) {
          font-size: 15px;
          line-height: 1.3333333333;
        }
      }
    }
  }

  @media screen and (max-width: 950px) {
    &:nth-child(n) {
      scroll-snap-align: start;
      flex: 0 0 calc((100vw - 72px) / 2.66);
      padding-left: 16px;
      box-sizing: border-box;
    }

    &:first-child {
      flex: 0 0 calc((100vw - 72px) / 2.66 + 24px);
      padding-left: 40px;
    }

    &:last-child {
      flex: 0 0 calc((100vw - 72px) / 2.66 + 40px);
      padding-right: 40px;
    }
  }

  @media screen and (max-width: 744px) {
    &:nth-child(n) {
      flex: 0 0 calc((100vw - 40px) / 1.66);
      padding-left: 16px;
    }

    &:first-child {
      flex: 0 0 calc((100vw - 40px) / 1.66 + 8px);
      padding-left: 24px;
    }

    &:last-child {
      flex: 0 0 calc((100vw - 40px) / 1.66 + 24px);
      padding-right: 24px;
    }
  }
`;

export default function HomeCard(props) {
  return (
    <StMainContentCard cover={props.cover} color={props.color}>
      <div />
      <div>
        <div>
          <p>{props.location}</p>
          <span>{props.distance} 거리</span>
        </div>
      </div>
    </StMainContentCard>
  );
}
