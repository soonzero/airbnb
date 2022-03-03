import React from "react";
import { ReactComponent as Wish } from "../img/wish.svg";
import { ReactComponent as Prev } from "../img/flexcard_prev.svg";
import { ReactComponent as Next } from "../img/flexcard_next.svg";
import style from "../Components/css/FlexCard.module.css";

export default function FlexCard(props) {
  const Card = props.contents.map((content) => {
    return (
      <div key={content.id} className={style.card}>
        <div
          className={style.cover}
          style={{ backgroundImage: `url(${content.cover[0]})` }}
        >
          <div className={style.wish}>
            <Wish />
          </div>
          <div className={style.btns}>
            <div className={style.prev}>
              <Prev />
            </div>
            <div className={style.next}>
              <Next />
            </div>
          </div>
        </div>
        <div className={style.detail}>
          <div className={style.location}>
            {content.location.length > 20
              ? `${content.location.slice(0, 20)}...`
              : content.location}
          </div>
          <div className={style.price}>{content.price} / 박</div>
        </div>
        <div className={style.more}>
          <div className={style.distance}>{content.distance} 거리</div>
          <div className={style.date}>{content.date}</div>
        </div>
      </div>
    );
  });
  return <div className={style.cards}>{Card}</div>;
}
