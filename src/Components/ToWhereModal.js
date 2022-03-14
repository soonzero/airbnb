import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StToWhereContainer = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 2000;
  background-color: white;
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;

  &:before {
    content: "";
    display: block;
    flex: 1 1 auto;
  }

  & > div {
    flex-basis: 95%;
    position: relative;

    & > section:first-child {
      display: flex;
      align-items: center;
      position: relative;
      padding: 16px 24px 0;

      & > div {
        display: flex;
        height: 48px;
        width: 100%;
        align-items: stretch;

        & > div:first-child {
          display: flex;
          flex-shrink: 0;
          margin-right: 16px;
          align-items: stretch;

          & > button {
            appearance: none;
            display: inline-block;
            border-radius: 50%;
            border: none;
            margin: 0;
            outline: none;
            cursor: pointer;
            background-color: transparent;
            color: #222222;
            padding: 0;

            &::before {
              content: "";
              display: block;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 32px;
              height: 32px;
              border-radius: 50%;
            }

            & > span {
              position: relative;
            }
          }
        }
        & > div:last-child {
          display: flex;
          align-items: center;
          border-radius: 24px;
          flex-grow: 1;
          border: none;
          background-color: white;
          box-shadow: none;

          & > form {
            flex: 1 1 0%;

            & > div > div {
              width: 100%;
              height: 100%;
              position: relative;

              & > label {
                display: flex;
                flex: 1 1 0%;
                overflow: hidden;
                position: relative;
                aling-items: center;
                margin: 0;
                white-space: nowrap;
                height: 48px;

                & > input {
                  width: 100%;
                  height: 100%;
                  min-height: 1px;
                  border: none;
                  outline: none;
                  margin: 0;
                  color: #222222;
                  background-color: transparent;
                  font-size: 1rem;
                  line-height: 1.25;
                  padding: 1px 8px;
                  text-overflow: ellipsis;
                }

                & > div {
                  display: flex;
                  justify-content: center;
                  cursor: text;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  font-size: 14px;
                  line-height: 1.2857142857;
                  color: #222222;

                  & > div {
                    padding-right: 8px;
                    color: #ff385c;
                  }
                }
              }
            }
          }
        }
      }
    }
    & > section:last-child {
      border: none;
      border-radius: 0;
      background-color: white;
      width: 100vw;
      height: calc(100vh - 64px);
      position: absolute;
      top: 64px;
      left: 0;
      right: 0;
      padding-top: 8px;
      overflow: auto;
      display: block;

      & > div {
        margin: 0;
        padding: 0;
        transition: visibility 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s,
          opacity 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
        visibility: visible;
        opacity: 1;

        & > div {
          margin: 0 0 16px;
          padding: 0;

          & > div {
            list-style-type: none;
            margin: 0;
            padding: 8px 32px 2px;

            & > span {
              font-size: 12px;
              line-height: 1;
              text-transform: uppercase;
            }
          }

          & > a > div {
            list-style-type: none;
            cursor: pointer;
            padding: 8px 32px;

            & > div {
              display: flex;
              width: 100%;
              flex-direction: row-reverse;
              align-items: center;
              padding: 8px 24px;
              margin-top: 8px;
              box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
              height: 58px;
              border-radius: 32px;
              box-sizing: border-box;
              border: 1px solid #dddddd;

              &>div: last-child {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;

                & > div {
                  font-size: 18px;
                  line-height: 1.1111111111;
                  font-weight: 600;
                  text-overflow: ellipsis;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default function ToWhereModal(props) {
  return (
    <StToWhereContainer modal={props.modal}>
      <div>
        <section>
          <div>
            <div>
              <button
                type="button"
                onClick={() => props.setModal((prev) => !prev)}
              >
                <span>
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      fill: "none",
                      height: "16px",
                      width: "16px",
                      stroke: "currentcolor",
                      strokeWidth: 4,
                      overflow: "visible",
                    }}
                  >
                    <g fill="none">
                      <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path>
                    </g>
                  </svg>
                </span>
              </button>
            </div>
            <div>
              <form>
                <div>
                  <div>
                    <label>
                      <input
                        type="text"
                        placeholder="어디로 여행가세요?"
                      ></input>
                      <div>
                        <div>
                          <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                              display: "block",
                              fill: "none",
                              height: "16px",
                              width: "16px",
                              stroke: "currentcolor",
                              strokeWidth: 4,
                              overflow: "visible",
                            }}
                          >
                            <g fill="none">
                              <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                            </g>
                          </svg>
                        </div>
                        어디로 여행가세요?
                      </div>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div>
              <div>
                <span>언제 어디로든 떠나는 여행</span>
              </div>
              <Link
                to="/flex/farm"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <div>
                  <div>
                    <div>
                      <video
                        preload="auto"
                        autoPlay
                        playsInline
                        poster="https://a0.muscache.com/pictures/04c0a34f-9880-48b7-a69c-49011f602a35.jpg"
                        src="https://a0.muscache.com/videos/vopt/13/e1/13e14ffc-822c-5e84-aa58-d6a6527dc218/13e14ffc822c5e84aa58d6a6527dc218.mp4?impolicy=low_quality"
                        width="28"
                        height="28"
                      />
                    </div>
                    <div>
                      <div>유연한 검색</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </StToWhereContainer>
  );
}
