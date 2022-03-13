import React from "react";
import style from "./css/Footer.module.css";
import { ReactComponent as Global } from "../img/global.svg";
import { ReactComponent as Facebook } from "../img/facebook.svg";
import { ReactComponent as Twitter } from "../img/twitter.svg";
import { ReactComponent as Instagram } from "../img/instagram.svg";
import { ReactComponent as Blog } from "../img/naverblog.svg";
import { ReactComponent as Post } from "../img/naverpost.svg";

export default function Footer(props) {
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

  return props.display == "none" && width < 744 ? null : (
    <footer className={style.footer}>
      <div className={style.footerMain} style={{ maxWidth: props.maxwidth }}>
        <div className={style.footerWrapper}>
          <div className={style.footerContainer}>
            <div className={style.sitemap}>
              <section className={style.sitemapContents}>
                <h5 className={style.sitemapTitle}>에어비앤비 지원</h5>
                <ul>
                  <li className={style.sitemapContent}>
                    <span>도움말 센터</span>
                  </li>
                  <li className={style.sitemapContent}>
                    <span>안전 정보</span>
                  </li>
                  <li className={style.sitemapContent}>
                    <span>예약 취소 옵션</span>
                  </li>
                  <li className={style.sitemapContent}>
                    <span>에어비앤비의 코로나19 대응 방안</span>
                  </li>
                  <li className={style.sitemapContent}>
                    <span>장애인 지원</span>
                  </li>
                  <li className={style.sitemapContent}>
                    <span>이웃 민원 신고</span>
                  </li>
                </ul>
              </section>
              <section className={style.sitemapContents}>
                <h5 className={style.sitemapTitle}>커뮤니티</h5>
                <ul>
                  <li className={style.sitemapContent}>
                    <span>Airbnb.org: 재난 구호 숙소</span>
                  </li>
                  <li className={style.sitemapContent}>
                    <span>아프간 난민 지원</span>
                  </li>
                  <li className={style.sitemapContent}>
                    <span>차별 철폐를 위한 노력</span>
                  </li>
                </ul>
              </section>
              <section className={style.sitemapContents}>
                <h5 className={style.sitemapTitle}>호스팅</h5>
                <ul>
                  <li className={style.sitemapContent}>
                    <span>호스팅 시작하기</span>
                  </li>
                  <li className={style.sitemapContent}>
                    <span>에어커버: 호스트를 위한 보호 프로그램</span>
                  </li>
                  <li className={style.sitemapContent}>
                    <span>호스팅 자료 둘러보기</span>
                  </li>
                  <li className={style.sitemapContent}>
                    <span>커뮤니티 포럼 방문하기</span>
                  </li>
                  <li className={style.sitemapContent}>
                    <span>책임감 있는 호스팅</span>
                  </li>
                </ul>
              </section>
              <section className={style.sitemapContents}>
                <h5 className={style.sitemapTitle}>소개</h5>
                <ul>
                  <li className={style.sitemapContent}>
                    <span>뉴스룸</span>
                  </li>
                  <li className={style.sitemapContent}>
                    <span>새로운 기능에 대해 알아보기</span>
                  </li>
                  <li className={style.sitemapContent}>
                    <span>에어비앤비 공동창업자의 메시지</span>
                  </li>
                  <li className={style.sitemapContent}>
                    <span>채용정보</span>
                  </li>
                  <li className={style.sitemapContent}>
                    <span>투자자 정보</span>
                  </li>
                  <li className={style.sitemapContent}>
                    <span>에어비앤비 Luxe</span>
                  </li>
                </ul>
              </section>
            </div>
            {width > 1128 ? (
              <div className={style.extraInformation}>
                <div className={style.extraInfo}>
                  <div className={style.airbnbName}>© 2022 Airbnb, Inc.</div>
                  <div className={style.info}>
                    <span className={style.dot}>·</span>
                    <a href="#">개인정보 처리방침</a>
                    <span className={style.dot}>·</span>
                    <a href="#">이용약관</a>
                    <span className={style.dot}>·</span>
                    <a href="#">사이트맵</a>
                    <span className={style.dot}>·</span>
                    <a href="#">한국의 변경된 환불 정책</a>
                    <span className={style.dot}>·</span>
                    <a href="#">회사 세부정보</a>
                  </div>
                </div>
                <div className={style.settingsAndSocial}>
                  <div className={style.settings}>
                    <button className={style.setting}>
                      <span className={style.globalIcon}>
                        <Global />
                      </span>
                      <span className={style.language}>한국어 (KR)</span>
                    </button>
                    <button className={style.setting}>
                      <span className={style.currencyIcon}>₩</span>
                      <span className={style.currency}>KRW</span>
                    </button>
                  </div>
                  <ul className={style.social}>
                    <li>
                      <Facebook />
                    </li>
                    <li>
                      <Twitter />
                    </li>
                    <li>
                      <Instagram />
                    </li>
                    <li>
                      <Blog />
                    </li>
                    <li>
                      <Post />
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className={style.extraInformation}>
                <div className={style.settingsAndSocial}>
                  <div className={style.settings}>
                    <button className={style.setting}>
                      <span className={style.globalIcon}>
                        <Global />
                      </span>
                      <span className={style.language}>한국어 (KR)</span>
                    </button>
                    <button className={style.setting}>
                      <span className={style.currencyIcon}>₩</span>
                      <span className={style.currency}>KRW</span>
                    </button>
                  </div>
                  <ul className={style.social}>
                    <li>
                      <Facebook />
                    </li>
                    <li>
                      <Twitter />
                    </li>
                    <li>
                      <Instagram />
                    </li>
                    <li>
                      <Blog />
                    </li>
                    <li>
                      <Post />
                    </li>
                  </ul>
                </div>
                <div className={style.extraInfo}>
                  <div className={style.airbnbName}>© 2022 Airbnb, Inc.</div>
                  <div className={style.info}>
                    <span className={style.dot}>·</span>
                    <a href="#">개인정보 처리방침</a>
                    <span className={style.dot}>·</span>
                    <a href="#">이용약관</a>
                    <span className={style.dot}>·</span>
                    <a href="#">사이트맵</a>
                    <span className={style.dot}>·</span>
                    <a href="#">한국의 변경된 환불 정책</a>
                    <span className={style.dot}>·</span>
                    <a href="#">회사 세부정보</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
