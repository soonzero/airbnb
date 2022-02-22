import React from "react";
import style from "./css/Footer.module.css";
import { ReactComponent as Global } from "../img/global.svg";
import { ReactComponent as Facebook } from "../img/facebook.svg";
import { ReactComponent as Twitter } from "../img/twitter.svg";
import { ReactComponent as Instagram } from "../img/instagram.svg";
import { ReactComponent as Blog } from "../img/naverblog.svg";
import { ReactComponent as Post } from "../img/naverpost.svg";

export default function Footer(props) {
  return (
    <footer className={style.footer} style={{ border: props.border }}>
      <div className={style.footerMain} style={{ maxWidth: props.maxwidth }}>
        <div className={style.sitemap}>
          <section className={style.sitemapContents}>
            <h5 className={style.sitemapTitle}>에어비앤비 지원</h5>
            <ul>
              <li className={style.sitemapContent}>도움말 센터</li>
              <li className={style.sitemapContent}>안전 정보</li>
              <li className={style.sitemapContent}>예약 취소 옵션</li>
              <li className={style.sitemapContent}>
                에어비앤비의 코로나19 대응 방안
              </li>
              <li className={style.sitemapContent}>장애인 지원</li>
              <li className={style.sitemapContent}>이웃 민원 신고</li>
            </ul>
          </section>
          <section className={style.sitemapContents}>
            <h5 className={style.sitemapTitle}>커뮤니티</h5>
            <ul>
              <li className={style.sitemapContent}>
                Airbnb.org: 재난 구호 숙소
              </li>
              <li className={style.sitemapContent}>아프간 난민 지원</li>
              <li className={style.sitemapContent}>차별 철폐를 위한 노력</li>
            </ul>
          </section>
          <section className={style.sitemapContents}>
            <h5 className={style.sitemapTitle}>호스팅</h5>
            <ul>
              <li className={style.sitemapContent}>호스팅 시작하기</li>
              <li className={style.sitemapContent}>
                에어커버: 호스트를 위한 보호 프로그램
              </li>
              <li className={style.sitemapContent}>호스팅 자료 둘러보기</li>
              <li className={style.sitemapContent}>커뮤니티 포럼 방문하기</li>
              <li className={style.sitemapContent}>책임감 있는 호스팅</li>
            </ul>
          </section>
          <section className={style.sitemapContents}>
            <h5 className={style.sitemapTitle}>소개</h5>
            <ul>
              <li className={style.sitemapContent}>뉴스룸</li>
              <li className={style.sitemapContent}>
                새로운 기능에 대해 알아보기
              </li>
              <li className={style.sitemapContent}>
                에어비앤비 공동창업자의 메시지
              </li>
              <li className={style.sitemapContent}>채용정보</li>
              <li className={style.sitemapContent}>투자자 정보</li>
              <li className={style.sitemapContent}>에어비앤비 Luxe</li>
            </ul>
          </section>
        </div>
        <div className={style.extraInformation}>
          <div className={style.info}>
            <span>© 2022 Airbnb, Inc.</span>
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
          <div className={style.settingAndSocial}>
            <div className={style.setting}>
              <Global />
              <span className={style.language}>한국어 (KR)</span>
              <span className={style.currencyIcon}>₩</span>
              <span className={style.currency}>KRW</span>
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
      </div>
    </footer>
  );
}
