import React from "react";
import styled from "styled-components";

const StMap = styled.div`
  position: fixed;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);

  &:hover {
    transition: -ms-transform 0.2s ease-in-out,
      -webkit-transform 0.2s ease-in-out, transform 0.2s ease-in-out;
  }

  & > button {
    color: white;
    display: flex;
    flex-direction: row;
    background-color: #222222;
    border-radius: 24px;
    padding: 14px 19px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    font-size: 14px;
    line-height: 1.2857142857;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: -ms-transform 0.25s ease, -webkit-transform 0.25s ease,
      transform 0.25s ease;

    @media screen and (max-width: 744px) {
      padding: 11px 19px;
      font-size: 12px;
      line-height: 1.3333333333;
    }

    &:hover {
      transform: scale(1.04);
      box-shadow: 0px 0px 0px 1px transparent, 0px 0px 0px 4px transparent,
        0px 6px 16px rgba(0, 0, 0, 0.12);
    }

    & > span {
      margin-right: 8px;
    }
  }

  @media screen and (max-width: 744px) {
    bottom: 96px;
  }
`;

export default function MapBtn() {
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

  return (
    <StMap>
      <button>
        <span>{width < 744 ? "지도" : "지도 표시하기"}</span>
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style={{
            display: "block",
            height: "16px",
            width: "16px",
            fill: "rgb(255, 255, 255)",
          }}
        >
          <path d="M31.245 3.747a2.285 2.285 0 0 0-1.01-1.44A2.286 2.286 0 0 0 28.501 2l-7.515 1.67-10-2L2.5 3.557A2.286 2.286 0 0 0 .7 5.802v21.95a2.284 2.284 0 0 0 1.065 1.941A2.29 2.29 0 0 0 3.498 30l7.515-1.67 10 2 8.484-1.886a2.285 2.285 0 0 0 1.802-2.245V4.247a2.3 2.3 0 0 0-.055-.5zM12.5 25.975l-1.514-.303L9.508 26H9.5V4.665l1.514-.336 1.486.297v21.349zm10 1.36l-1.515.337-1.485-.297V6.025l1.514.304L22.493 6h.007v21.335z"></path>
        </svg>
      </button>
    </StMap>
  );
}
