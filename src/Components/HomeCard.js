import React from "react";
import style from "./css/HomeCard.module.css";

export default function HomeCard(props) {
  return (
    <div className={style.mainContentCard}>
      <div
        className={style.contentCardPic}
        style={{ backgroundImage: props.cover }}
      ></div>
      <div
        className={style.contentCardDesc}
        style={{ backgroundColor: props.color }}
      >
        <p className={style.contentCardLocation}>{props.location}</p>
        <span className={style.contentCardDistance}>{props.distance} 거리</span>
      </div>
    </div>
  );
}
