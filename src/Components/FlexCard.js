import React from "react";
import { ReactComponent as Wish } from "../img/wish.svg";
import { ReactComponent as Prev } from "../img/flexcard_prev.svg";
import { ReactComponent as Next } from "../img/flexcard_next.svg";
import style from "../Components/css/FlexCard.module.css";

export default function FlexCard(props) {
  const Card = props.contents.map((content) => {
    return (
      <div key={content.id} className={style.card}>
        <div className={style.cover}>
          <div className={style.coverBase}>
            <div
              className={style.realCover}
              style={{ backgroundImage: `url(${content.cover[0]})` }}
            >
              <div className={style.wish}>
                <div></div>
                <Wish
                  fill="rgba(0, 0, 0, 0.5)"
                  stroke="white"
                  strokeWidth="2"
                />
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
          </div>
        </div>
        <div className={style.detail}>
          <span className={style.location}>{content.location}</span>
          <span className={style.price}>{content.price} / 박</span>
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
