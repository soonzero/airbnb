import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ReactComponent as SearchButton } from "../img/search.svg";

const StSearch = styled.div`
  color: black;
  min-width: 348px;
  padding: 0 24px;
  box-sizing: border-box;
  text-align: center;
  flex: 0 1 auto;

  & > div > div > div > div {
    box-sizing: border-box;
    margin: 0 auto;
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    width: 100%;
    box-sizing: border-box;

    & > div {
      display: inline-flex;
      align-items: center;
      background-color: white;
      border: 1px solid #dddddd;
      border-radius: 40px;
      box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
      color: #222222;
      max-width: 100%;
      text-align: left;
      box-sizing: border-box;

      & > button:first-child {
        padding-left: 8px;
      }

      & > button {
        appearance: none;
        background-color: transparent;
        border: 1px solid transparent;
        cursor: pointer;
        display: flex;
        margin: -1px;
        flex: 0 1 auto;
        height: 48px;
        min-width: 0;
        position: relative;
        z-index: 1;
        box-sizing: border-box;
        display: flex;
        align-items: center;

        & > div:first-child {
          font-size: 14px;
          line-height: 1.2857142857;
          flex: 1 1 auto;
          min-width: 0;
          padding: 0 16px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          box-sizing: border-box;
        }

        & > span {
          background-color: #ff385c;
          border-radius: 50%;
          color: white;
          height: 32px;
          margin: 7px 7px 7px 0;
          padding: 10px;
          width: 32px;
          box-sizing: border-box;
        }
      }

      & > span {
        background-color: #dddddd;
        flex: 0 0 1px;
        height: 24px;
        width: 1px;
      }
    }
  }
`;

export default function SearchCondition() {
  const destination = useSelector((state) => state.search.destination);
  const checkIn = useSelector((state) => state.search.checkIn);
  const checkOut = useSelector((state) => state.search.checkOut);
  const period = `${checkIn.slice(5, 7)}월 ${checkIn.slice(
    8,
    10
  )}일~${checkOut.slice(8, 10)}일`;
  const guests = `게스트 ${useSelector((state) => state.search.total)}명`;

  return (
    <StSearch>
      <div>
        <div>
          <div>
            <div>
              <div>
                <button type="button">
                  <div>{destination}</div>
                </button>
                <span></span>
                <button type="button">
                  <div>{period}</div>
                </button>
                <span></span>
                <button type="button">
                  <div>{guests}</div>
                  <span>
                    <SearchButton width="12px" height="12px" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StSearch>
  );
}
