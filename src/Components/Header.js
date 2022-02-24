import React from "react";
import { ReactComponent as Logo } from "../img/logowithtext.svg";
import { ReactComponent as Global } from "../img/global.svg";
import { ReactComponent as Menu } from "../img/menu.svg";
import { ReactComponent as Account } from "../img/account.svg";
import { Link } from "react-router-dom";
import style from "./css/Header.module.css";

export default function Header(props) {
  const [scrollY, setScrollY] = React.useState(0);
  const [fixed, setFixed] = React.useState(false);
  const dropdownRef = React.useRef(null);
  const [menu, setMenu] = React.useState(false);

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
    if (props.fixed == "true") {
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
    <header
      className={fixed ? `${style.header} ${style.fixed}` : `${style.header}`}
    >
      <nav
        className={
          fixed ? `${style.navContent} ${style.fixed}` : `${style.navContent}`
        }
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
        {/* <div className="nav--menu">
          <ul>
            <li>숙소</li>
            <li>체험</li>
            <div>온라인 체험</div>
          </ul>
          <form></form>
        </div> */}
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
                  <div className={style.menuList}>회원 가입</div>
                  <div className={style.menuList}>로그인</div>
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
  );
}
