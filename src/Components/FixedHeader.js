import React from "react";
import Blackout from "./Blackout";
import Sign from "./Sign";
import GetUserProfile from "./GetUserProfile";
import { ReactComponent as Logo } from "../img/logowithtext.svg";
import { ReactComponent as Log0 } from "../img/logo.svg";
import { ReactComponent as Global } from "../img/global.svg";
import { ReactComponent as Menu } from "../img/menu.svg";
import { ReactComponent as Account } from "../img/account.svg";
import { Link, useNavigate } from "react-router-dom";
import style from "./css/FixedHeader.module.css";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import SearchCondition from "./SearchCondition";

const StFixedHeader = styled.div`
  width: 100vw;
  background-color: white;
  position: ${(props) => (props.nonfixed == "true" ? "relative" : "fixed")};
  top: ${(props) => (props.nonfixed == "true" ? "unset" : "0")};
  z-index: 3;

  @media screen and (max-width: 743px) {
    display: none;
  }

  &::before {
    content: "";
    height: 140%;
    left: 0;
    top: 0;
    width: 100%;
    opacity: 0;
    position: absolute;
  }

  &::after {
    box-shadow: ${(props) =>
      props.nonfixed == "true"
        ? "rgb(0 0 0 / 8%) 0px 1px 1px"
        : "rgba(0, 0, 0, 0.08) 0px 1px 12px"};
    content: "";
    display: block;
    height: 80px;
    width: 100%;
    z-index: -1;
    position: ${(props) => (props.nonfixed == "true" ? "absolute" : "fixed")};
    top: ${(props) => (props.nonfixed == "true" ? "0" : "0")};
  }
`;

const StMargin = styled.div`
  content: "";
  width: 100%;
  height: ${(props) => props.height};

  @media screen and (max-width: 743px) {
    display: none;
  }
`;

const StLogoWithText = styled.div`
  display: block;
  @media screen and (max-width: 1128px) {
    display: none;
  }
`;

const StLogoWithoutText = styled.div`
  display: none;
  @media screen and (max-width: 1128px) {
    display: block;
  }
`;

export default function FixedHeader(props) {
  const dropdownRef = React.useRef(null);
  const [menu, setMenu] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);

  const navigate = useNavigate();

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

  function onSetIsVisible() {
    setIsVisible((prev) => !prev);
  }

  React.useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isVisible]);

  function handleMenu(event) {
    setMenu(!menu);
  }

  const dispatch = useDispatch();
  const loginText = useSelector((state) => state.loginReducer.text);
  const login = useSelector((state) => state.loginReducer.login);
  const way = useSelector((state) => state.loginReducer.way);

  function logoutSite() {
    dispatch({ type: "LOGOUT_SUCCESS" });
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
      <StFixedHeader nonfixed={`${props.fixed == "false" ? "false" : "true"}`}>
        <nav className={style.fixedNavContent}>
          <div className={`${style.navLogo} ${style.fixed}`}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <StLogoWithoutText>
                <Log0 fill="#ff5a5f" />
              </StLogoWithoutText>
              <StLogoWithText>
                <Logo fill="#ff5a5f" />
              </StLogoWithText>
            </Link>
          </div>
          {props.panel == "panel" && <SearchCondition />}
          <div className={`${style.navSide} ${style.fixed}`}>
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
                        onClick={props.modal == "false" ? null : onSetIsVisible}
                      >
                        ?????? ??????
                      </div>
                      <div
                        className={style.menuList}
                        onClick={props.modal == "false" ? null : onSetIsVisible}
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
      </StFixedHeader>
      <div>
        {isVisible && <Blackout onSetIsVisible={onSetIsVisible} />}
        {isVisible && <Sign modal onSetIsVisible={onSetIsVisible} />}
      </div>
      <StMargin height={props.height} />
    </>
  );
}
