import React from "react";
import { ReactComponent as Logo } from "../img/logo.svg";
import Footer from "../Components/Footer";
import style from "../Components/css/Covid.module.css";
import { Link } from "react-router-dom";

export default function Covid() {
  const Cards = [
    {
      id: 1,
      title: `코로나19와 관련된 게스트 질문과 답변`,
      desc: `코로나19 상황에서 게스트를 지원하기 위해 지속적으로 업데이트되는 에어비앤비 정책과 프로그램에 대해 알아보세요.`,
      image: `url("https://a0.muscache.com/pictures/5b1705cb-b607-4d14-ab70-ba651db04712.jpg")`,
      linkto:
        "https://www.airbnb.co.kr/resources/hosting-homes/a/answers-for-travelers-about-covid-19-153",
    },
    {
      id: 2,
      title: `세계 각지의 여행 제한`,
      desc: `거주 지역이나 여행지에서 호스트와 게스트에게 적용되는 방역 지침을 확인하세요.`,
      image: `url("https://a0.muscache.com/pictures/73c86208-af51-41fe-8ad4-a71a7b8e2114.jpg")`,
      linkto:
        "https://apply.joinsherpa.com/travel-restrictions?affiliateid=airbnb",
    },
    {
      id: 3,
      title: `코로나19로 인해 예약이 변경되거나 취소되는 경우`,
      desc: `취소 및 환불 옵션을 알아보세요.`,
      image: `url("https://a0.muscache.com/pictures/83755149-3f71-4501-9b52-c7b0455fcbcc.jpg")`,
      linkto:
        "https://www.airbnb.co.kr/help/article/2728/cancellation-options-due-to-covid19",
    },
    {
      id: 4,
      title: `에어비앤비에서 안심하고 여행을 계획하세요`,
      desc: `환불 정책에 따라 숙소를 검색하는 방법을 알아보세요.`,
      image: `url("https://a0.muscache.com/pictures/39ab10dc-7bff-4338-8793-683716af1f65.jpg")`,
      linkto:
        "https://www.airbnb.co.kr/help/article/3043/search-for-more-flexible-cancellation-policies",
    },
  ];

  const safetytipcardElements = Cards.map((card) => {
    return (
      <a href={card.linkto} target="_blank">
        <div className={style.safetyCard}>
          <div
            className={style.cardCover}
            style={{ backgroundImage: card.image }}
          ></div>
          <h3 class={style.cardTitle}>{card.title}</h3>
          <p class={style.cardDesc}>{card.desc}</p>
          <span class={style.cardMoreInfo}>자세히 알아보기</span>
        </div>
      </a>
    );
  });

  return (
    <div>
      <header className={style.header}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo fill={"#FF5A5F"} />
        </Link>
      </header>
      <main className={style.main}>
        <div className={style.desc}>
          <h1 className={style.title}>더욱 안전하게 즐기는 여행</h1>
          <p className={style.detail}>
            코로나19 확산 시기와 그 이후를 대비한 최신 여행 팁을 확인해보세요.
          </p>
        </div>
        <div className={style.safetyCards}>{safetytipcardElements}</div>
      </main>
      <main className={style.main}>
        <div className={style.desc}>
          <h1 className={style.title}>안전은 모두가 함께 지켜야 합니다</h1>
          <p className={style.detail}>
            에어비앤비 호스트와 게스트는 업데이트된 코로나19 보건∙방역 수칙을
            준수해야
            <br />
            합니다.
          </p>
        </div>
        <div className={style.policies}>
          <div className={style.policy}>
            <img src="https://a0.muscache.com/pictures/85598100-3455-42a9-b657-d09e3a869edc.jpg" />
            <h2 className={style.policyTitle}>마스크 착용</h2>
            <span className={style.policyDesc}>
              게스트와 호스트는 대면 교류 시 마스크 착용과 관련된 현지 법규와
              지침을 준수해야 합니다.
            </span>
          </div>
          <div className={style.policy}>
            <img src="https://a0.muscache.com/pictures/537bb7ad-65be-4e14-9686-f6d1e0422a8c.jpg" />
            <h2 className={style.policyTitle}>사회적 거리 두기</h2>
            <span className={style.policyDesc}>
              현지 법규나 지침에서 요구하는 경우, 호스트와 게스트는 2m(6피트)
              거리를 유지해야 합니다.
            </span>
          </div>
          <div className={style.policy}>
            <img src="https://a0.muscache.com/pictures/f438b2fb-c829-4596-a7e6-d81467780d4a.jpg" />
            <h2 className={style.policyTitle}>청결 강화 기준</h2>
            <span className={style.policyDesc}>
              전 세계의 에어비앤비 호스트는 전문가 자문을 바탕으로 마련된 강화된
              5단계 청소 절차를 준수하며 위생과 청결에 각별한 주의를 기울이고
              있습니다
            </span>
          </div>
        </div>
        <span className={style.buttonMore}>코로나19 방역 수칙 알아보기</span>
      </main>
      <main className={style.main}>
        <div className={style.image}>
          <img src="https://a0.muscache.com/pictures/d531f23c-d288-4a0c-9074-d0a2886e6b1b.jpg" />
        </div>
      </main>
      <main className={style.main}>
        <div className={style.desc}>
          <h1 className={style.title}>모든 예약에 강화된 기준 적용</h1>
          <p className={style.detail}>
            전문가 자문을 받아 마련된 강화된 5단계 청소 절차는 철저한 방역을
            통해 커뮤니티의
            <br />
            안전을 지키기 위한 필수적인 단계입니다.
          </p>
        </div>
        <span className={style.buttonMore}>자세히 알아보기</span>
        <div className={style.image}>
          <img src="https://a0.muscache.com/pictures/dae1adc2-79c6-495c-ab64-a9e37e3a4279.jpg" />
        </div>
      </main>
      <main className={style.main}>
        <div className={style.desc}>
          <h1 className={style.title}>
            다른 사람과의 접촉을 최소화하는 단독 공간
          </h1>
          <p className={style.detail}>
            프라이빗 숙소, 비대면 체크인, 탁 트인 야외 공간, 넓은 실내 공간 등
            꼭 필요한 편의시설을 갖춘 숙소를 찾아보세요.
          </p>
        </div>
        <span className={style.buttonMore}>인근의 단독 숙소 둘러보기</span>
        <div className={style.image}>
          <img src="https://a0.muscache.com/pictures/57d8d685-d26c-4e3a-bb72-abf3cf68cd56.jpg" />
        </div>
      </main>
      <main className={style.main}>
        <h1 className={style.title}>자주 묻는 질문과 답변</h1>
      </main>
      <div className={style.questions}>
        <div>
          <span className={style.question}>
            새로운 안전 및 청소 가이드라인을 준수하는 숙소인지 어떻게 알 수
            있나요?
          </span>
        </div>
        <div>
          <span className={style.question}>
            코로나19 유행 기간 동안 에어비앤비 체험에 적용되는 정책은
            무엇인가요?
          </span>
        </div>
        <div>
          <span className={style.question}>
            기존 예약을 변경하거나 취소하려면 어떻게 해야 하나요?
          </span>
        </div>
        <div>
          <span className={style.question}>
            예약 변경이나 취소에 대비한 유연한 옵션에는 어떤 것이 있나요?
          </span>
        </div>
      </div>
      <main className={style.main}>
        <h1 className={style.title}>기타 자료</h1>
        <div className={style.etc}>
          <div>
            <h3>정상참작이 가능한 상황 정책</h3>
            <span>자세히 알아보기</span>
          </div>
          <div>
            <h3>환불 정책</h3>
            <span>자세히 알아보기</span>
          </div>
          <div>
            <h3>호스트용 자료</h3>
            <span>자세히 알아보기</span>
          </div>
        </div>
      </main>
      <Footer maxwidth="1280px" border="1px solid #dddddd" />
    </div>
  );
}
