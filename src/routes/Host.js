import React from "react";
import Footer from "../Components/Footer";
import style from "../Components/css/Host.module.css";
import { ReactComponent as Logo } from "../img/hostlogo.svg";
import { ReactComponent as Left } from "../img/host_leftbutton.svg";
import { ReactComponent as Right } from "../img/host_rightbutton.svg";
import { ReactComponent as Aircover } from "../img/aircover.svg";
import { Link } from "react-router-dom";

export default function Host() {
  const [fixed, setFixed] = React.useState(false);
  const [fix, setFix] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);
  const [carousel, setCarousel] = React.useState([
    {
      id: 1,
      cover:
        "https://a0.muscache.com/im/pictures/4f3047b2-58ea-4335-8430-dfc6f436634d.jpg?im_w=720",
      desc: `스튜디오 호스팅 덕에 새로운 삶을 사는\n느낌이에요. 좋은 인연과 잊을 수 없는 추억은\n덤이죠.`,
      signature:
        "https://a0.muscache.com/im/pictures/f2b0e082-6872-47a3-a9f6-d01a9c44a088.jpg?im_w=240",
      location: "밀라노",
    },
    {
      id: 2,
      cover:
        "https://a0.muscache.com/im/pictures/31fb3cb1-c2a1-4e14-a9e9-6f279991790b.jpg?im_w=720",
      desc: `집을 숙소로 호스팅하면서 자영업자가 되어\n경제적 자유에 한 걸음 더 가까워질 수 있었어요.`,
      signature:
        "https://a0.muscache.com/im/pictures/b0123613-6e48-4108-af8b-bb2d347b4de8.jpg?im_w=240",
      location: "애틀랜타",
    },
    {
      id: 3,
      cover:
        "https://a0.muscache.com/im/pictures/a464d642-695e-4d2c-aa51-2302de067f45.jpg?im_w=720",
      desc: `파스타 만들기 체험을 호스팅함으로써 문화\n보존에 기여할 수 있습니다.`,
      signature:
        "https://a0.muscache.com/im/pictures/4314911d-559f-4fc7-a493-2edce264d839.jpg?im_w=240",
      location: "팔롬바라사비나",
    },
    {
      id: 4,
      cover:
        "https://a0.muscache.com/im/pictures/d8627b07-b42c-40a1-807f-1eac9de39311.jpg?im_w=720",
      desc: `에어비앤비 덕분에 제가 제일 좋아하는 일을\n업으로 삼을 수 있게 되었어요. 바로 집에서\n게스트를 맞이하고 돌보는 일이죠.`,
      signature:
        "https://a0.muscache.com/im/pictures/80b16be2-f6bf-4a68-846f-b35d4b85c455.jpg?im_w=240",
      location: "치앙마이",
    },
    {
      id: 5,
      cover:
        "https://a0.muscache.com/im/pictures/b56f3d7c-5006-4ed2-967a-c421e3275b1f.jpg?im_w=720",
      desc: `베두인 텐트 호스팅을 통해 세계 각지에서 온\n분들을 만날 수 있었습니다.`,
      signature:
        "https://a0.muscache.com/im/pictures/82a3e33e-a83e-49e8-b642-0de04018075b.jpg?im_w=240",
      location: "와디럼",
    },
    {
      id: 6,
      cover:
        "https://a0.muscache.com/im/pictures/334530d8-2ad6-40e8-8fd2-4ac0835e693a.jpg?im_w=720",
      desc: `게스트가 소중한 사람들과 자연 속에서 교감할 수\n있도록 친환경 숙소를 호스팅하는 게 참 보람\n있어요.`,
      signature:
        "https://a0.muscache.com/im/pictures/62dccc5f-5fa6-4e24-8406-8ced33d1c403.jpg?im_w=240",
      location: "파라치",
    },
  ]);
  const [prevDisabled, setPrevDisabled] = React.useState(true);
  const [nextDisabled, setNextDisabled] = React.useState(false);

  const [dropSpace, setDropSpace] = React.useState(false);
  const spaceRef = React.useRef(null);

  function handleScroll() {
    if (scrollY > 1200 && scrollY < 5110.5) {
      setScrollY(window.scrollY);
      setFixed(true);
      console.log(scrollY);
    } else if (scrollY >= 5110.5) {
      setScrollY(window.scrollY);
      setFixed(false);
      setFix(true);
    } else {
      setScrollY(window.scrollY);
      setFixed(false);
      setFix(false);
    }
  }

  function carouselScroll() {
    const container = document.querySelector(`.${style.carouselContainer}`);
    if (container.scrollLeft > 0 && container.scrollLeft < 2781.5) {
      setPrevDisabled(false);
      setNextDisabled(false);
    } else if (container.scrollLeft == 2781.5) {
      setNextDisabled(true);
    } else {
      setPrevDisabled(true);
    }
  }

  function scrollToPrev() {
    const container = document.querySelector(`.${style.carouselContainer}`);
    container.scrollLeft -= 400;
  }

  function scrollToNext() {
    const container = document.querySelector(`.${style.carouselContainer}`);
    container.scrollLeft += 400;
  }

  function scrollDown() {
    window.scroll(0, 1415);
  }

  React.useEffect(() => {
    const container = document.querySelector(`.${style.carouselContainer}`);
    function scrollListener() {
      container.addEventListener("scroll", carouselScroll);
    }
    scrollListener();
    return () => {
      container.removeEventListener("scroll", carouselScroll);
    };
  });

  React.useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function dropMenu() {
    setDropSpace(!dropSpace);
  }

  React.useEffect(() => {
    const pageClickEvent = (event) => {
      if (
        spaceRef.current !== null &&
        !spaceRef.current.contains(event.target)
      ) {
        setDropSpace(!dropSpace);
      }
    };
    if (dropSpace) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [dropSpace]);

  const carouselItems = carousel.map((item) => {
    return (
      <div className={style.cItem}>
        <div
          className={style.cCover}
          style={{ backgroundImage: `url(${item.cover})` }}
        ></div>
        <div className={style.cDesc}>
          <div className={style.desc}>{item.desc}</div>
          <div className={style.signature}>
            <img src={item.signature} />
          </div>
          <span className={style.cLocation}>{`${item.location}의 호스트`}</span>
        </div>
      </div>
    );
  });

  return (
    <div>
      {fixed ? (
        <header className={style.header}>
          <Link to="/">
            <div className={style.logo}>
              <Logo fill="black" />
            </div>
          </Link>
          <div className={style.aboutHost}>
            <div className={style.askSuperHost}>
              <div className={style.superHostsImage}>
                <img src="https://a0.muscache.com/im/pictures/c131fb36-f46a-464f-ad2f-087ebf88078d.jpg"></img>
                <img src="https://a0.muscache.com/im/pictures/3ddc6e92-e2fd-4cdc-a460-2f1d7d5365ae.jpg"></img>
                <img src="https://a0.muscache.com/im/pictures/ba6627db-1aa4-4f7f-9f18-5be3d3470037.jpg"></img>
              </div>
              슈퍼호스트에게 물어보기
            </div>
            <div className={style.startHosting}>호스팅 시작하기</div>
          </div>
        </header>
      ) : fix ? (
        <header className={`${style.header} ${style.fixagain}`}>
          <Link to="/">
            <div className={style.logo}>
              <Logo fill="black" />
            </div>
          </Link>
          <div className={style.aboutHost}>
            <div className={style.askSuperHost}>
              <div className={style.superHostsImage}>
                <img src="https://a0.muscache.com/im/pictures/c131fb36-f46a-464f-ad2f-087ebf88078d.jpg"></img>
                <img src="https://a0.muscache.com/im/pictures/3ddc6e92-e2fd-4cdc-a460-2f1d7d5365ae.jpg"></img>
                <img src="https://a0.muscache.com/im/pictures/ba6627db-1aa4-4f7f-9f18-5be3d3470037.jpg"></img>
              </div>
              슈퍼호스트에게 물어보기
            </div>
            <div className={style.startHosting}>호스팅 시작하기</div>
          </div>
        </header>
      ) : null}
      <section className={style.fullScreen}>
        <div className={style.leftScreen}>
          <Link to="/">
            <div className={style.logo}>
              <Logo fill="white" />
            </div>
          </Link>
          <div className={style.point}>
            <h1>
              에어비앤비의
              <br />
              핵심을 이루는
              <br />
              호스팅
            </h1>
            <button className={style.startHosting}>호스팅 시작하기</button>
            <div className={style.scrollDown} onClick={scrollDown}>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  fill: "none",
                  height: "16px",
                  width: "16px",
                  stroke: "white",
                  strokeWidth: "4",
                  overflow: "visible",
                }}
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <g fill="none">
                  <path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className={style.rightScreen}>
          <video
            src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </section>
      <main className={style.main}>
        <div className={style.content}>
          <div className={style.container}>
            <h1 className={style.title}>
              언제 어디서든
              <br />
              호스팅하실 수 있습니다
            </h1>
            <div className={style.wrapper}>
              <div className={style.carouselContainer}>
                <div className={style.cItem}></div>
                {carouselItems}
                <div className={style.cItem}></div>
              </div>
              <div className={style.btns}>
                <button
                  className={`${style.button} ${style.leftbutton}`}
                  disabled={prevDisabled}
                  onClick={scrollToPrev}
                >
                  <Left />
                </button>
                <button
                  className={`${style.button} ${style.rightbutton}`}
                  disabled={nextDisabled}
                  onClick={scrollToNext}
                >
                  <Right />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main className={style.main}>
        <div className={style.content}>
          <div className={style.pContainer}>
            <div className={style.profit}>
              <div className={style.profitContent}>
                <h1 className={style.question}>어떤 종류의 숙소인가요?</h1>
                <div className={style.answer}>
                  <button className={style.answerButton} onClick={dropMenu}>
                    <span>공간 전체</span>
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 1.00008L7.35355 6.64652C7.15829 6.84178 6.84171 6.84178 6.64645 6.64652L1 1.00008"
                        stroke="#222"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    {dropSpace ? (
                      <div ref={spaceRef} className={style.selection}>
                        <ul className={style.listbox}>
                          <li className={style.list}>공간 전체</li>
                          <li className={style.list}>개인실</li>
                          <li className={style.list}>다인실</li>
                        </ul>
                      </div>
                    ) : null}
                  </button>
                </div>
              </div>
              <div className={style.profitContent}>
                <h1 className={style.question}>숙박 인원은 몇 명인가요?</h1>
                <div className={style.answer}>
                  <button className={style.answerButton}>
                    <span>게스트 4명</span>
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 1.00008L7.35355 6.64652C7.15829 6.84178 6.84171 6.84178 6.64645 6.64652L1 1.00008"
                        stroke="#222"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    {/* <div className={style.selection}>
                      <ul className={style.listbox}>
                        <li className={style.list}>게스트 1명</li>
                        <li className={style.list}>게스트 2명</li>
                        <li className={style.list}>게스트 3명</li>
                        <li className={style.list}>게스트 4명</li>
                      </ul>
                    </div> */}
                  </button>
                </div>
              </div>
              <div className={style.profitContent}>
                <h1 className={style.question}>숙소 위치는 어디인가요?</h1>
                <div className={style.answer}>
                  <button className={style.answerButton}>
                    <span>서울시</span>
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 1.00008L7.35355 6.64652C7.15829 6.84178 6.84171 6.84178 6.64645 6.64652L1 1.00008"
                        stroke="#222"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className={style.profitContent}>
                <h1 className={style.result}>
                  월 최대 ₩1,773,972의 수입을 올리세요.*
                </h1>
              </div>
            </div>
            <div className={style.calc}>
              <button>에어비앤비가 예상 수입을 산정하는 방법</button>
            </div>
          </div>
        </div>
      </main>
      <main className={style.main}>
        <div className={style.content}>
          <div className={style.cover}>
            <div className={style.askSuperhostDesc}>
              <h1>
                호스팅에 관해 궁금하신 점이 있나요?
                <br />
                슈퍼호스트에게 물어보세요.
              </h1>
              <div className={style.getMoreInfo}>
                <span>자세히 알아보기</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main className={style.main}>
        <div className={style.content}>
          <div className={style.aircover}>
            <div className={style.aircoverDesc}>
              <div className={style.aircoverLogo}>
                <Aircover />
              </div>
              <p>
                호스팅 전반에 걸친 보호. 호스트에게
                <br />
                무료 제공. 오직 에어비앤비에서만.
              </p>
              <a href="#" className={style.aircoverMore}>
                에어커버 둘러보기
              </a>
            </div>
            <div className={style.aircoverImage}>
              <img src="https://a0.muscache.com/im/pictures/11e10d64-867e-4dba-b0b4-896026a4f0e0.jpg?im_w=2560&im_q=highq"></img>
            </div>
          </div>
        </div>
      </main>
      <section className={style.fullScreen}>
        <div className={style.leftScreen}>
          <video
            src="https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className={style.rightScreen}>
          <div className={style.point}>
            <h2>
              에어비앤비에서
              <br />
              호스팅을 시작해보세요
            </h2>
            <p>
              에어비앤비 호스트가 되어보세요. 에어비앤비가
              <br />
              모든 단계에서 도와드립니다.
            </p>
            <button className={style.startHosting}>시작하기</button>
          </div>
        </div>
      </section>
      <div className={style.footerwrapper}>
        <Footer maxwidth="1280px" />
      </div>
    </div>
  );
}
