import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import HomeCard from "../Components/HomeCard";
import style from "../Components/css/Home.module.css";
import { Link } from "react-router-dom";
import "../reset.css";

function Home() {
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
      <div className={style.bannerCovidSafety}>
        <Link to="/covid">
          <span>
            에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.
          </span>
        </Link>
        <Header />
      </div>
      <section className={`${style.mainSearch}`}>
        <div className={style.flexibleSearchContainer}>
          <div className={style.flexibleSearch}>
            <h1>
              에어비앤비가
              <br />
              여행지를 찾아드릴게요!
            </h1>
            <Link to="/flex/farm">
              <span>유연한 검색</span>
            </Link>
          </div>
        </div>
      </section>
      <main className={style.mainContent}>
        <div>
          <p className={style.mainContentTitle}>
            설레는 다음 여행을 위한 아이디어
          </p>
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
    </div>
  );
}

export default Home;
