import React from "react";
import Blackout from "./Blackout";
import Sign from "./Sign";
import SearchPanel from "./SearchPanel";
import GetUserProfile from "./GetUserProfile";
import { ReactComponent as LogoWithText } from "../img/logowithtext.svg";
import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as Global } from "../img/global.svg";
import { ReactComponent as Menu } from "../img/menu.svg";
import { ReactComponent as Account } from "../img/account.svg";
import { Link, useNavigate } from "react-router-dom";
import style from "./css/Header.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function Header(props) {
  const { Kakao } = window;
  const [scrollY, setScrollY] = React.useState(0);
  const [fixed, setFixed] = React.useState(false);
  const dropdownRef = React.useRef(null);
  const [menu, setMenu] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
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

  function onSetIsVisible(active) {
    setIsVisible(active);
  }

  React.useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isVisible]);

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

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useSelector((state) => state.loginReducer.login);
  const way = useSelector((state) => state.loginReducer.way);

  function logoutSite() {
    if (way == "kakao") {
      if (Kakao.Auth.getAccessToken()) {
        console.log(
          "????????? ?????? ????????? ????????? ???????????????",
          Kakao.Auth.getAccessToken()
        );
        Kakao.Auth.logout(() => {
          console.log("???????????? ??????", Kakao.Auth.getAccessToken());
          dispatch({ type: "LOGOUT_SUCCESS" });
        });
      }
    } else {
      dispatch({ type: "LOGOUT_SUCCESS" });
    }
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
              {width > 1128 ? (
                <LogoWithText fill={fixed ? "#ff5a5f" : "white"} />
              ) : (
                <Logo fill={fixed ? "#ff5a5f" : "white"} />
              )}
            </Link>
          </div>
          {props.fixed ? null : <SearchPanel fixed={fixed} />}
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
                  <p>????????? ??????</p>
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
                {login && way == "kakao" ? (
                  <GetUserProfile login={login} />
                ) : (
                  <Account />
                )}
                {login ? null : <span className={style.accountUpdate}> </span>}
              </div>
              {menu ? (
                <div ref={dropdownRef} className={style.profileMenu}>
                  {login ? (
                    <div>
                      <div className={style.menuList}>?????????</div>
                      <div className={style.menuList}>??????</div>
                      <div
                        className={style.menuList}
                        onClick={() => navigate(`/wishlists`)}
                      >
                        ???????????????
                      </div>
                      <div className={style.menuDivider}></div>
                      <div
                        className={style.menuList}
                        onClick={() => navigate(`/host`)}
                      >
                        ?????? ????????? ??????
                      </div>
                      <div className={style.menuList}>?????? ???????????????</div>
                      <div className={style.menuList}>????????? ????????????</div>
                      <div className={style.menuList}>??????</div>
                      <div className={style.menuDivider}></div>
                      <div className={style.menuList}>?????????</div>
                      <div className={style.menuList} onClick={logoutSite}>
                        ????????????
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div
                        className={style.menuList}
                        onClick={() => onSetIsVisible(true)}
                      >
                        ?????? ??????
                      </div>
                      <div
                        className={style.menuList}
                        onClick={() => onSetIsVisible(true)}
                      >
                        ?????????
                      </div>
                      <div className={style.menuDivider}></div>
                      <div className={style.menuList}>?????? ????????? ??????</div>
                      <div className={style.menuList}>?????? ???????????????</div>
                      <div className={style.menuList}>?????????</div>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </nav>
      </header>
      <div>
        {isVisible && <Blackout onSetIsVisible={onSetIsVisible} />}
        {isVisible && <Sign modal onSetIsVisible={onSetIsVisible} />}
      </div>
    </>
  );
}
