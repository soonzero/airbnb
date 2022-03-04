import React from "react";
import style from "../Components/css/Flex.module.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StFilterContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
    z-index: -1;
    box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
    opacity: ${(props) => (props.position > 80 ? "1" : "0")};
    transition: opacity 250ms ease-in-out;
  }
`;

const StFilter = styled.div`
  background-color: white;
  margin: 8px auto 0px;
  padding: 0 80px;
  max-width: 1760px;
  height: 80px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 10;

  @media screen and (max-width: 1128px) {
    padding: 0 24px;
  }
`;

const StSelectionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StBorderBottomContainer = styled.div`
  position: absolute;
  top: 0;
`;

export default function FlexFilter(props) {
  const navigate = useNavigate();

  const [scrollY, setScrollY] = React.useState(0);
  const [filters, setFilters] = React.useState([
    {
      id: 1,
      name: "농장",
      path: "farm",
      icon: "https://a0.muscache.com/pictures/373869d1-31bb-4a47-95d9-ccd5e478b715.jpg",
    },
    {
      id: 2,
      name: "멋진 수영장",
      path: "pool",
      icon: "https://a0.muscache.com/pictures/ea71f998-267a-4ffd-9ca8-ee70814dd775.jpg",
    },
    {
      id: 3,
      name: "해변 근처",
      path: "beach",
      icon: "https://a0.muscache.com/pictures/483c0cae-5bfe-45b3-b4e4-8697253b2875.jpg",
    },
    {
      id: 4,
      name: "초소형 주택",
      path: "small",
      icon: "https://a0.muscache.com/pictures/c54d41c5-c279-442f-9ec3-afbc1c5104cb.jpg",
    },
    {
      id: 5,
      name: "통나무집",
      path: "wood",
      icon: "https://a0.muscache.com/pictures/ddab88e4-da9d-4e7c-8af8-165507476572.jpg",
    },
    {
      id: 6,
      name: "성",
      path: "castle",
      icon: "https://a0.muscache.com/pictures/8565b4ea-91f1-403a-86cb-ba3f676968e3.jpg",
    },
  ]);

  function handleScroll() {
    if (scrollY > 50) {
      setScrollY(window.scrollY);
    } else {
      setScrollY(window.scrollY);
    }
  }

  React.useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <StFilterContainer position={scrollY}>
      <StFilter>
        <div className={style.selection}>
          <StSelectionContainer>
            {filters.map((filter) => {
              return (
                <button
                  className={style.filterBtn}
                  onClick={() => navigate(`/flex/${filter.path}`)}
                >
                  <div
                    className={
                      filter.path == props.selected
                        ? style.iconSelected
                        : style.icon
                    }
                  >
                    <img src={`${filter.icon}`}></img>
                  </div>
                  <span>{filter.name}</span>
                </button>
              );
            })}
          </StSelectionContainer>
        </div>
        <div className={style.condition}>
          <button>
            <span className={style.textLeft}>언제든</span>
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                fill: "none",
                height: "12px",
                width: "12px",
                stroke: "currentcolor",
                strokeWidth: "5.33333",
                overflow: "visible",
              }}
            >
              <g fill="none">
                <path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path>
              </g>
            </svg>
          </button>
          <button>
            <span className={style.textLeft}>인원</span>
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                fill: "none",
                height: "12px",
                width: "12px",
                stroke: "currentcolor",
                strokeWidth: "5.33333",
                overflow: "visible",
              }}
            >
              <g fill="none">
                <path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path>
              </g>
            </svg>
          </button>
          <button>
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: "16px",
                width: "16px",
                fill: "currentcolor",
              }}
            >
              <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
            </svg>
            <span className={style.textRight}>필터</span>
          </button>
        </div>
      </StFilter>
    </StFilterContainer>
  );
}
