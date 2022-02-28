import React from "react";
import Blackout from "./Blackout";
import Sign from "./Sign";
import { ReactComponent as Logo } from "../img/logowithtext.svg";
import { ReactComponent as Global } from "../img/global.svg";
import { ReactComponent as Menu } from "../img/menu.svg";
import { ReactComponent as Account } from "../img/account.svg";
import { ReactComponent as Search } from "../img/search.svg";
import { Link } from "react-router-dom";
import style from "./css/Header.module.css";

export default function Header(props) {
  const [scrollY, setScrollY] = React.useState(0);
  const [fixed, setFixed] = React.useState(false);
  const dropdownRef = React.useRef(null);
  const [menu, setMenu] = React.useState(false);
  const toWhereRef = React.useRef(null);
  const [where, setWhere] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  function onSetIsVisible(active) {
    setIsVisible(active);
  }

  function handleScroll() {
    if (scrollY > 50) {
      setScrollY(window.scrollY);
      setFixed(true);
    } else {
      setScrollY(window.scrollY);
      setFixed(false);
    }
  }

  React.useEffect(() => {
    const pageClickEvent = (event) => {
      if (
        toWhereRef.current !== null &&
        !toWhereRef.current.contains(event.target)
      ) {
        setWhere(false);
      }
    };
    if (where) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [where]);

  function handleWhere(event) {
    setWhere(!where);
  }

  React.useEffect(() => {
    if (props.fixed) {
      setFixed(true);
      return;
    }
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  function handleMenu(event) {
    setMenu(!menu);
  }

  React.useEffect(() => {
    const pageClickEvent = (event) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(event.target)
      ) {
        setMenu(!menu);
      }
    };
    if (menu) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [menu]);

  return (
    <>
      <header className={fixed ? `${style.fixedHeader}` : `${style.header}`}>
        <nav
          className={fixed ? `${style.fixedNavContent}` : `${style.navContent}`}
        >
          <div
            className={
              fixed ? `${style.navLogo} ${style.fixed}` : `${style.navLogo}`
            }
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Logo fill={fixed ? "#ff5a5f" : "white"} />
            </Link>
          </div>
          {!props.fixed && (
            <div className={style.search}>
              {fixed && (
                <button className={style.searchPanel}>
                  <span className={style.startSearching}>검색 시작하기</span>
                  <div className={style.searchBtn}>
                    <Search width="12px" height="12px" />
                  </div>
                </button>
              )}
              <div className={style.searchForm}>
                {!fixed && (
                  <div className={style.formWrapper}>
                    <div className={style.category}>
                      <div className={style.stayandexperience}>
                        <div className={style.stay}>
                          <button className={style.stayBtn}>숙소</button>
                        </div>
                        <div className={style.experience}>
                          <button className={style.experienceBtn}>체험</button>
                        </div>
                      </div>
                      <div className={style.onlineExperience}>
                        <button className={style.onlineExperienceBtn}>
                          <Link
                            to="/online"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            온라인 체험
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className={style.tabPanelWrapper}>
                      <div className={style.tabPanel}>
                        <div
                          className={style.where}
                          onClick={() => handleWhere()}
                        >
                          <label htmlFor="toWhere" className={style.toWhere}>
                            <span>위치</span>
                            <input
                              id="toWhere"
                              placeholder="어디로 여행가세요?"
                            ></input>
                          </label>
                          {where ? (
                            <div className={style.flexibleSearchContainer}>
                              <div
                                ref={toWhereRef}
                                className={style.flexibleSearch}
                              >
                                <span>언제 어디로든 떠나는 여행</span>
                                <Link
                                  to="/flex"
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                >
                                  <div>
                                    유연한 검색
                                    <video
                                      preload="auto"
                                      autoPlay
                                      playsInline
                                      poster="https://a0.muscache.com/pictures/04c0a34f-9880-48b7-a69c-49011f602a35.jpg"
                                      src="https://a0.muscache.com/videos/vopt/13/e1/13e14ffc-822c-5e84-aa58-d6a6527dc218/13e14ffc822c5e84aa58d6a6527dc218.mp4?impolicy=low_quality"
                                    />
                                  </div>
                                </Link>
                              </div>
                            </div>
                          ) : null}
                        </div>
                        <div className={style.divider}></div>
                        <div className={style.checkWhen}>
                          <button className={style.checkIn}>
                            <span>체크인</span>
                            <div>날짜 입력</div>
                          </button>
                          <div className={style.divider}></div>
                          <button className={style.checkOut}>
                            <span>체크아웃</span>
                            <div>날짜 입력</div>
                          </button>
                        </div>
                        <div className={style.divider}></div>
                        <div className={style.guestsAndBtn}>
                          <div className={style.guests}>
                            <button className={style.guestsBtn}>
                              <div>인원</div>
                              <div>게스트 추가</div>
                            </button>
                          </div>
                          <div className={style.panelSearchBtn}>
                            <button>
                              <Search width="16px" height="16px" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          <div
            className={
              fixed ? `${style.navSide} ${style.fixed}` : `${style.navSide}`
            }
          >
            <div className={style.navHostGlobal}>
              <Link
                to="/host"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className={style.navHost}>
                  <p>호스트 되기</p>
                </div>
              </Link>
              <div className={style.navGlobal}>
                <Global />
              </div>
            </div>
            <div className={style.menuAccount} onClick={() => handleMenu()}>
              <div className={style.menu}>
                <Menu />
              </div>
              <div className={style.account}>
                <Account />
                <span className={style.accountUpdate}> </span>
              </div>
              {menu ? (
                <div ref={dropdownRef} className={style.profileMenu}>
                  <div>
                    <div
                      className={style.menuList}
                      onClick={() => onSetIsVisible(true)}
                    >
                      회원 가입
                    </div>
                    <div
                      className={style.menuList}
                      onClick={() => onSetIsVisible(true)}
                    >
                      로그인
                    </div>
                    <div className={style.menuDivider}></div>
                    <div className={style.menuList}>숙소 호스트 되기</div>
                    <div className={style.menuList}>체험 호스팅하기</div>
                    <div className={style.menuList}>도움말</div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </nav>
      </header>
      <div>
        {isVisible && <Blackout onSetIsVisible={onSetIsVisible} />}
        {isVisible && <Sign onSetIsVisible={onSetIsVisible} />}
      </div>
    </>
  );
}
