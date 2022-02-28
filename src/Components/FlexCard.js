import React from "react";
import { ReactComponent as Wish } from "../img/wish.svg";
import { ReactComponent as Prev } from "../img/flexcard_prev.svg";
import { ReactComponent as Next } from "../img/flexcard_next.svg";
import style from "../Components/css/FlexCard.module.css";

export default function FlexCard(props) {
  const Card = (sth) =>
    props.contents
      .filter((e) => e.id == sth)[0]
      .content.map((c) => {
        return (
          <div key={c.id} className={style.card}>
            <div
              className={style.cover}
              style={{ backgroundImage: `url(${c.cover[1]})` }}
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
                {c.location.length > 20
                  ? `${c.location.slice(0, 20)}...`
                  : c.location}
              </div>
              <div className={style.price}>{c.price} / 박</div>
            </div>
            <div className={style.more}>
              <div className={style.distance}>{c.distance} 거리</div>
              <div className={style.date}>{c.date}</div>
            </div>
          </div>
        );
      });
  return <div className={style.cards}>{Card("농장")}</div>;
}
