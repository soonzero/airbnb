import React from "react";
import FixedHeader from "../Components/FixedHeader";
import Footer from "../Components/Footer";
import Blackout from "../Components/Blackout";
import Sign from "../Components/Sign";
import BottomNavBar from "../Components/BottomNavBar";
import styled from "styled-components";
import { ReactComponent as Cancel } from "../img/cancel.svg";
import { useDispatch, useSelector } from "react-redux";

const StContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  min-height: 100vh;
`;

const StMainContainer = styled.main`
  box-sizing: border-box;

  & > div {
    padding: 0 80px;
    margin: 0 auto;
    max-width: 1440px;
    box-sizing: border-box;

    @media screen and (max-width: 1128px) {
      padding: 0 40px;
    }

    @media screen and (max-width: 743px) {
      padding: 0 24px;
    }

    & > div {
      margin: 36px 0px 24px;
      box-sizing: border-box;

      & > div:first-child {
        margin-bottom: 36px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        @media screen and (max-width: 743px) {
          margin-bottom: 15px;
        }

        & > div {
          box-sizing: border-box;

          & > h1 {
            font-size: 32px;
            line-height: 1.125;
            color: #222222;
            margin: 20px 0 15px;
            contain: paint;
          }
        }
      }

      & > div:nth-child(2) {
        max-width: 496px;
        margin-top: 32px;
        box-sizing: border-box;

        & > section {
          box-sizing: border-box;
          display: block;

          & > h2 {
            font-size: 1em;
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;

            & > div {
              font-size: 22px;
              line-height: 1.1818181818;
              color: #222222;
              box-sizing: border-box;
            }
          }

          & > p {
            margin: 16px 0 24px;
            font-size: 14px;
            line-height: 1.4285714286;
            color: #717171;
            box-sizing: border-box;
          }

          & > button {
            cursor: pointer;
            box-sizing: border-box;
            display: inline-block;
            margin: 0px;
            padding: 14px 24px;
            text-align: center;
            position: relative;
            text-decoration: none;
            width: auto;
            font-size: 16px;
            line-height: 1.25;
            border-radius: 8px;
            outline: none;
            border: none;
            color: white;
            background: linear-gradient(
              to right,
              rgb(230, 30, 77) 0%,
              rgb(227, 28, 95) 50%,
              rgb(215, 4, 102) 100%
            );

            & > span {
              display: block;
              position: relative;
              box-sizing: border-box;
            }
          }
        }
      }

      & > section {
        box-sizing: border-box;

        & > div {
          display: block;
          box-sizing: border-box;
        }
      }
    }
  }
`;

const StListBox = styled.div`
  box-sizing: border-box;

  & > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    list-style-type: none;
    margin: -5px;
    padding: 0;
    box-sizing: border-box;

    & > li {
      display: flex;
      box-sizing: border-box;
      width: calc(33.333333333333336% - 14.666666666666666px);
      margin: 0 11px 22px 11px;

      @media screen and (max-width: 3000px) {
        &:nth-child(3n) {
          margin-right: 0;
        }

        &:nth-child(3n + 1) {
          margin-left: 0;
        }
      }

      @media screen and (max-width: 1128px) {
        width: calc(50% - 11px);

        &:nth-child(2n) {
          margin-right: 0;
          margin-left: 11px;
        }

        &:nth-child(2n + 1) {
          margin-left: 0;
          margin-right: 11px;
        }
      }

      & > div {
        width: 100%;
        box-sizing: border-box;

        & > div {
          width: 100%;
          box-sizing: border-box;

          & > div:first-child {
            overflow: hidden;
            position: relative;
            width: 100%;
            border-radius: 16px;
            padding-top: 52%;
            box-sizing: border-box;

            & > div {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: #dddddd;
              box-sizing: border-box;

              & > div {
                display: inline-block;
                vertical-align: bottom;
                height: 100%;
                width: 100%;
                min-height: 1px
                background-position: 50% 50%;
                background-repeat: no-repeat;
                box-sizing: border-box;

                & > img {
                  object-fit: cover;
                  object-position: center center;
                  vertical-align: bottom;
                  height: 100%;
                  width: 100%;
                  position: static;
                  box-sizing: border-box;
                }
              }
            }
          }

          & > div:last-child {
            display: flex;
            padding: 12px 0 16px 0;
            height: 88px;
            box-sizing: border-box;

            & > div {
              width: 100%;
              box-sizing: border-box;

              & > div:first-child {
                font-size: 22px;
                line-height: 1.1818181818;
                color: #222222;
                margin-bottom: 5px;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                align-items: center;

                & > button {
                  padding: 5px;
                  border-radius: 50%;
                  cursor: pointer;
                  box-sizing: border-box;

                  &:hover {
                    background-color: rgba(0, 0, 0, 0.5);
                  }
                }
              }

              & > div:last-child {
                font-size: 12px;
                line-height: 1.3333333333;
                color: #777777;
                box-sizing: border-box;
              }
            }
          }
        }
      }
    }
  }
}
`;

const StDivision = styled.div`
  box-sizing: border-box;

  & > div > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

    & > div {
      border-radius: 1px;
      padding: 8px 0;
      width: 100%;
      box-sizing: border-box;

      & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;

        & > div {
          display: flex;
          box-sizing: border-box;

          & > div:first-child {
            margin-right: 16px;
            box-sizing: border-box;

            & > div {
              border-radius: 8px;
              overflow: hidden;
              box-sizing: border-box;

              & > div {
                display: inline-block;
                vertical-align: bottom;
                height: 64px;
                width: 64px;
                min-height: 1px;
                background-position: 50% 50%;
                background-repeat: no-repeat;
                box-sizing: border-box;

                & > img {
                  object-fit: cover;
                  vertical-align: bottom;
                  height: 100%;
                  width: 100%;
                  position: static;
                  box-sizing: border-box;
                }
              }
            }
          }

          & > div:last-child {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1 1 auto;
            width: 100%;
            box-sizing: border-box;

            & > div {
              color: #222222;
              cursor: inherit;
              font-size: 16px;
              line-height: 1.25;
              box-sizing: border-box;

              & > div {
                font-size: 16px;
                line-height: 1.25;
                color: #222222;
                box-sizing: border-box;
              }
            }
          }
        }

        & > button {
          height: 100%;
          padding: 5px;
          border-radius: 50%;
          cursor: pointer;

          &:hover {
            background-color: rgba(0, 0, 0, 0.5);
          }
        }
      }
    }
  }
`;

export default function Wishlists() {
  const login = useSelector((state) => state.loginReducer.login);

  const [isVisible, setIsVisible] = React.useState(false);

  function onSetIsVisible(active) {
    setIsVisible(active);
  }

  const [width, setWidth] = React.useState(window.innerWidth);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    function resizeListener() {
      window.addEventListener("resize", handleResize);
    }
    resizeListener();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  const dispatch = useDispatch();

  const handleDeleteWishlist = (event) => {
    const title = event.currentTarget.getAttribute(`title`);
    dispatch({ type: "DELETE_WISHLIST", data: title });
  };

  const items = useSelector((state) => state.wishlist);
  const listItems = items.map((item) => {
    if (width >= 744) {
      return (
        <li>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <img src={item.cover}></img>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    {item.country}
                    <button
                      type="button"
                      title={item.title}
                      onClick={handleDeleteWishlist}
                    >
                      <Cancel />
                    </button>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    } else {
      return (
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <img src={item.cover}></img>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <div>{item.country}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  title={item.title}
                  onClick={handleDeleteWishlist}
                >
                  <Cancel />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  React.useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isVisible]);

  return (
    <div>
      <StContainer>
        <FixedHeader fixed="false" height="80px" />
        <StMainContainer>
          <div>
            <div>
              <div>
                <div>
                  <h1>위시리스트</h1>
                </div>
              </div>
              {login ? (
                <section>
                  <div>
                    {width < 744 ? (
                      <StDivision>{listItems}</StDivision>
                    ) : (
                      <StListBox>
                        <ul>{listItems}</ul>
                      </StListBox>
                    )}
                  </div>
                </section>
              ) : (
                <div>
                  <section>
                    <h2>
                      <div>위시리스트를 확인하려면 로그인하세요</div>
                    </h2>
                    <p>
                      로그인한 후 위시리스트를 생성 및 조회, 수정할 수 있습니다.
                    </p>
                    <button type="button" onClick={() => onSetIsVisible(true)}>
                      <span>로그인</span>
                    </button>
                  </section>
                </div>
              )}
            </div>
          </div>
        </StMainContainer>
      </StContainer>
      <Footer display="none" />
      <BottomNavBar now="wishlist" />
      <div>
        {isVisible && <Blackout onSetIsVisible={onSetIsVisible} />}
        {isVisible && <Sign modal onSetIsVisible={onSetIsVisible} />}
      </div>
    </div>
  );
}
