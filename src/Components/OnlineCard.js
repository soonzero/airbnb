import React from "react";
import Blackout from "./Blackout";
import Sign from "./Sign";
import { ReactComponent as Wish } from "../img/wish.svg";
import { ReactComponent as Star } from "../img/star.svg";
import { ReactComponent as Leftbutton } from "../img/leftbutton.svg";
import { ReactComponent as Rightbutton } from "../img/rightbutton.svg";
import style from "./css/OnlineCard.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function OnlineCard(props) {
  const [video, setVideo] = React.useState(false);
  const [target, setTarget] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isVisible, setIsVisible] = React.useState(false);
  const dispatch = useDispatch();
  const login = useSelector((state) => state.loginReducer.login);

  const handleClickWishlist = (event) => {
    const title = event.currentTarget.getAttribute(`title`);
    const rate = event.currentTarget.getAttribute(`rate`);
    const reviews = event.currentTarget.getAttribute(`reviews`);
    const price = event.currentTarget.getAttribute(`price`);
    const country = event.currentTarget.getAttribute(`country`);
    const cover = event.currentTarget.getAttribute(`cover`);

    if (login) {
      dispatch({
        type: "ADD_WISHLIST",
        data: {
          title: title,
          cover: cover,
          rate: rate,
          reviews: reviews,
          price: price,
          country: country,
        },
      });
    } else {
      alert("로그인 이후에 위시리스트에 추가할 수 있습니다.");
      setIsVisible(true);
    }
  };

  function onSetIsVisible(active) {
    setIsVisible(active);
  }

  React.useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isVisible]);

  const cardElements = props.items.contents.map((c) => {
    return (
      <div id={c.id} key={c.id} className={style.card}>
        <div
          id={c.id}
          className={style.cardCover}
          style={
            video && target == c.id && !isLoading
              ? null
              : { backgroundImage: `url(${c.image})` }
          }
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
          {video && target == c.id && !isLoading ? (
            <video src={`${c.video}`} autoPlay muted></video>
          ) : null}
          <button
            title={c.title}
            cover={c.image}
            rate={c.score}
            reviews={c.reviewcount}
            price={c.price}
            country={c.country}
            className={style.cardWish}
            onClick={handleClickWishlist}
          >
            <Wish fill="rgba(0, 0, 0, 0.5)" stroke="white" strokeWidth="2" />
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
      <div>
        {isVisible && <Blackout onSetIsVisible={onSetIsVisible} />}
        {isVisible && <Sign onSetIsVisible={onSetIsVisible} />}
      </div>
    </div>
  );
}
