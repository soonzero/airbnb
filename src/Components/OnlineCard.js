import React from "react";
import { ReactComponent as Wish } from "../img/wish.svg";
import { ReactComponent as Star } from "../img/star.svg";
import { ReactComponent as Leftbutton } from "../img/leftbutton.svg";
import { ReactComponent as Rightbutton } from "../img/rightbutton.svg";
import style from "./css/OnlineCard.module.css";

export default function OnlineCard(props) {
  const [video, setVideo] = React.useState(false);
  const [target, setTarget] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

  const cardElements = props.items.contents.map((c) => {
    return (
      <div
        id={c.id}
        key={c.id}
        className={style.card}
        onMouseEnter={(event) => {
          setTarget(event.target.id);
          setIsLoading(false);
          setTimeout(() => setVideo(true), 500);
        }}
        onMouseLeave={() => {
          setVideo(false);
          setIsLoading(true);
        }}
      >
        <div
          className={style.cardCover}
          style={
            video && target == c.id && !isLoading
              ? null
              : { backgroundImage: `url(${c.image})` }
          }
        >
          {video && target == c.id && !isLoading ? (
            <video src={`${c.video}`} autoPlay muted></video>
          ) : null}
          <button className={style.cardWish}>
            <Wish />
          </button>
        </div>
        <div className={style.cardDetail}>
          <span className={style.cardStar}>
            <Star />
          </span>
          <span className={style.cardScore}>{c.score}</span>
          <span className={style.cardReviewcount}>{c.reviewcount}</span>
          <span className={style.cardDot}>·</span>
          <span className={style.cardCountry}>{c.country}</span>
        </div>
        <h4 className={style.cardTitle}>{c.title}</h4>
        <span className={style.cardPrice}>
          {c.originalprice ? (
            <span className={style.cardOriginalPrice}>{c.originalprice}</span>
          ) : null}
          {c.price}
          <span>/인</span>
        </span>
      </div>
    );
  });

  return (
    <div className={style.mainContent}>
      <div className={style.cardsTitle}>
        <h2>{props.items.title}</h2>
        <div className={style.cardsDesc}>
          <div className={style.cardsCounter}>
            보기({props.items.contents.length}개)
          </div>
          <div className={style.scrollBtns}>
            <button className={style.scrollBtn}>
              <Leftbutton />
            </button>
            <button className={style.scrollBtn}>
              <Rightbutton />
            </button>
          </div>
        </div>
      </div>
      <div className={`${style.cardContents} ${props.items.id}`}>
        {cardElements}
      </div>
    </div>
  );
}
