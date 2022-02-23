import React from "react";
import { ReactComponent as Arrow } from "../img/arrow_dropdown.svg";
import style from "./css/Dropdown.module.css";

export default function Dropdown(props) {
  const [space, setSpace] = React.useState("공간 전체");
  const [dropSpace, setDropSpace] = React.useState(false);
  const spaceRef = React.useRef(null);

  function selectSpace(event) {
    const space = event.target.innerText;
    setSpace(space);
  }

  function dropSpaceMenu() {
    setDropSpace(!dropSpace);
  }

  const [guests, setGuests] = React.useState("게스트 4명");
  const [dropGuests, setDropGuests] = React.useState(false);
  const guestsRef = React.useRef(null);

  function selectGuests(event) {
    const guests = event.target.innerText;
    setGuests(guests);
  }

  function dropGuestsMenu() {
    setDropGuests(!dropGuests);
  }

  React.useEffect(() => {
    const pageClickEvent = (event) => {
      if (
        spaceRef.current !== null &&
        !spaceRef.current.contains(event.target)
      ) {
        setDropSpace(!dropSpace);
      }
    };
    if (dropSpace) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [dropSpace]);
  React.useEffect(() => {
    const pageClickEvent = (event) => {
      if (
        guestsRef.current !== null &&
        !guestsRef.current.contains(event.target)
      ) {
        setDropGuests(!dropGuests);
      }
    };
    if (dropGuests) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [dropGuests]);

  const listElements = (c) => {
    if (c == space) {
      return props.space.content.map((item) => {
        return (
          <li className={style.list} onClick={(e) => selectSpace(e)}>
            {item.id}
          </li>
        );
      });
    } else if (c == guests) {
      return props.guests.content.map((item) => {
        return (
          <li className={style.list} onClick={(e) => selectGuests(e)}>
            게스트 {item}명
          </li>
        );
      });
    }
  };

  return (
    <div className={style.pContainer}>
      <div className={style.profit}>
        <div className={style.profitContent}>
          <h1 className={style.question}>{props.space.question}</h1>
          <div className={style.answer}>
            <button className={style.answerButton} onClick={dropSpaceMenu}>
              <span>{space}</span>
              <Arrow />
              {dropSpace ? (
                <div ref={spaceRef} className={style.selection}>
                  <ul className={style.listbox}>{listElements(space)}</ul>
                </div>
              ) : null}
            </button>
          </div>
        </div>
        <div className={style.profitContent}>
          <h1 className={style.question}>{props.guests.question}</h1>
          <div className={style.answer}>
            <button className={style.answerButton} onClick={dropGuestsMenu}>
              <span>{guests}</span>
              <Arrow />
              {dropGuests ? (
                <div ref={guestsRef} className={style.selection}>
                  <ul className={style.listbox}>{listElements(guests)}</ul>
                </div>
              ) : null}
            </button>
          </div>
        </div>
        <div className={style.profitContent}>
          <h1 className={style.question}>숙소 위치는 어디인가요?</h1>
          <div className={style.answer}>
            <button className={style.answerButton}>
              <span>서울시</span>
              <Arrow />
            </button>
          </div>
        </div>
        <div className={style.profitContent}>
          <h1 className={style.result}>
            월 최대 ₩1,773,972의 수입을 올리세요.*
          </h1>
        </div>
      </div>
      <div className={style.calc}>
        <button>에어비앤비가 예상 수입을 산정하는 방법</button>
      </div>
    </div>
  );
}
