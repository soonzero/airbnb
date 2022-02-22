import React from "react";
import style from "./css/Banner.module.css";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className={style.bannerCovidSafety}>
      <Link to="/covid">
        <span>
          에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.
        </span>
      </Link>
    </div>
  );
}
