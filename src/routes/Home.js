import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HomeCard from "../Components/HomeCard";
import ToWhereModal from "../Components/ToWhereModal";
import BottomNavBar from "../Components/BottomNavBar";
import style from "../Components/css/Home.module.css";
import styled from "styled-components";
import { ReactComponent as LeftButton } from "../img/leftbutton.svg";
import { ReactComponent as RightButton } from "../img/rightbutton.svg";
import { Link } from "react-router-dom";
import "../reset.css";

const StToWhereButton = styled.div`
  position: ${(props) => (props.fixed ? "fixed" : "absolute")};
  left: 0px;
  right: 0px;
  top: ${(props) => (props.fixed ? 0 : "100%")};
  z-index: 100;
  padding: 24px 24px 16px;
  max-width: 100vw;

  &:before {
    content: "";
    display: block;
    height: 80px;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    background-color: white;
    box-shadow: rgb(0 0 0 / 8%) 0px 1px 0px;
    opacity: ${(props) => (props.fixed ? "unset" : 0)};
    box-sizing: border-box;
    transition: opacity 0.4s cubic-bezier(0.35, 0, 0.65, 1) 0s;
  }

  & > div {
    background-color: ${(props) => (props.fixed ? "#F7F7F7" : "white")};
    border: ${(props) =>
      props.fixed ? "1px solid #f7f7f7" : "1px solid white"};
    border-radius: 24px;
    position: relative;
    width: 100%;
    height: 48px;
    box-shadow: ${(props) =>
      props.fixed ? "none" : "rgb(0 0 0 / 20%) 0px 6px 20px"};
    box-sizing: border-box;

    & > button {
      cursor: pointer;
      position: relative;
      border-radius: 24px;
      outline: none;
      background-color: transparent;
      border: none;
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;

      & > div {
        display: flex;
        font-size: 14px;
        line-height: 1.2857142857;
        color: #222222;
        justify-content: center;
        text-align: center;

        & > div {
          padding-right: 8px;
          color: #ff385c;
        }
      }
    }
  }
`;

function Home() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [modal, setModal] = React.useState(false);
  const [prevDisabled, setPrevDisabled] = React.useState(true);
  const [nextDisabled, setNextDisabled] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);
  const [fixed, setFixed] = React.useState(false);

  function handleScrollY() {
    setScrollY(window.scrollY);
    if (scrollY > 50) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }

  React.useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScrollY);
    }
    scrollListener();
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, [scrollY]);

  function handleScroll() {
    const container = document.querySelector(`.${style.mainContentCards}`);
    const percent = () => {
      if (width > 744) {
        return 0.4407142857;
      } else {
        return 1.3;
      }
    };
    if (container.scrollLeft > 0 && container.scrollLeft < percent() * width) {
      setPrevDisabled(false);
      setNextDisabled(false);
    } else if (container.scrollLeft > percent() * width) {
      setNextDisabled(true);
    } else {
      setPrevDisabled(true);
    }
  }

  React.useEffect(() => {
    const container = document.querySelector(`.${style.mainContentCards}`);
    function scrollListener() {
      container.addEventListener("scroll", handleScroll);
    }
    scrollListener();
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  });

  function goPrev() {
    const container = document.querySelector(`.${style.mainContentCards}`);
    container.scrollLeft -= 300;
  }

  function goNext(event) {
    const container = document.querySelector(`.${style.mainContentCards}`);
    container.scrollLeft += 300;
  }

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

  const destination = [
    {
      id: 1,
      location: "제주도(Jeju)",
      distance: "455km",
      cover: `url("https://a0.muscache.com/im/pictures/cc5716eb-7454-4ae4-890a-fdcaf6b724be.jpg?im_q=highq&im_w=720")`,
      color: "#cc2d4a",
    },
    {
      id: 2,
      location: "강릉시",
      distance: "166km",
      cover: `url("https://a0.muscache.com/im/pictures/88960fb8-6ebb-48d2-ac44-4f5e08501435.jpg?im_q=highq&im_w=720")`,
      color: "#d93b30",
    },
    {
      id: 3,
      location: "속초시",
      distance: "157km",
      cover: `url("https://a0.muscache.com/im/pictures/12c42722-4e5a-4c2b-b6a1-ae6ddca46395.jpg?im_q=highq&im_w=720")`,
      color: "#bc1a6e",
    },
    {
      id: 4,
      location: "여수시",
      distance: "318km",
      cover: `url("https://a0.muscache.com/im/pictures/2d80dcb3-cbe3-4414-ac0f-3a6af22b9ab3.jpg?im_q=highq&im_w=720")`,
      color: "#de3151",
    },
  ];

  return (
    <div>
      {modal ? <ToWhereModal modal={modal} setModal={setModal} /> : null}
      <div className={style.bannerCovidSafety}>
        <Link to="/covid">
          <span>
            에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.
          </span>
        </Link>
        {width > 744 ? (
          <Header />
        ) : (
          <StToWhereButton fixed={fixed}>
            <div>
              <button
                type="button"
                onClick={() => {
                  setModal((prev) => !prev);
                }}
              >
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
              </button>
            </div>
          </StToWhereButton>
        )}
      </div>
      <section className={`${style.mainSearch}`}>
        <div className={style.flexibleSearchContainer}>
          <div className={style.flexibleSearch}>
            <h1>에어비앤비가 여행지를 찾아드릴게요!</h1>
            <Link to="/flex/farm">
              <span>유연한 검색</span>
            </Link>
          </div>
        </div>
      </section>
      <main className={style.mainContent}>
        <div className={style.mainContentContainer}>
          <p className={style.mainContentTitle}>
            설레는 다음 여행을 위한 아이디어
          </p>
          {width > 950 ? null : (
            <div className={style.scrollBtns}>
              <button
                className={style.scrollBtnPrev}
                onClick={goPrev}
                disabled={prevDisabled}
              >
                <LeftButton />
              </button>
              <button
                className={style.scrollBtnNext}
                onClick={goNext}
                disabled={nextDisabled}
              >
                <RightButton />
              </button>
            </div>
          )}
        </div>
        <div className={style.mainContentCards}>
          {destination.map((e) => {
            return (
              <HomeCard
                key={e.id}
                location={e.location}
                distance={e.distance}
                cover={e.cover}
                color={e.color}
              />
            );
          })}
        </div>
      </main>
      <main className={style.mainContent}>
        <div>
          <p className={style.mainContentTitle}>에어비앤비 체험 둘러보기</p>
        </div>
        <div className={style.mainExperiences}>
          <div className={style.mainExperienceContainer}>
            <div
              className={`${style.mainExperience} ${style.mainExperienceTraveling}`}
            >
              <h3 className={style.experience}>
                여행 중 만나는
                <br />
                이색적인 즐길 거리
              </h3>
              <a href="https://www.airbnb.co.kr/s/experiences?location_search=NEARBY">
                <span className={style.experienceButton}>체험</span>
              </a>
            </div>
          </div>
          <div className={style.mainExperienceContainer}>
            <div
              className={`${style.mainExperience} ${style.mainExperienceAtHome}`}
            >
              <h3 className={style.experience}>
                집에서 만나는
                <br />
                다양한 즐길 거리
              </h3>
              <Link to="/online" style={{ textDecoration: "none" }}>
                <span className={style.experienceButton}>온라인 체험</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <div className={style.askSuperHostContainer}>
        <div className={style.askSuperHost}>
          <h1 className={style.askHosting}>
            호스팅에 관해
            <br />
            궁금하신 점이
            <br />
            있나요?
          </h1>
          <div>
            <span className={style.experienceButton}>
              슈퍼호스트에게 물어보세요
            </span>
          </div>
        </div>
      </div>
      <Footer maxwidth="1600px" border="none" />
      <BottomNavBar />
    </div>
  );
}

export default Home;
