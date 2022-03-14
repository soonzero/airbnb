import React from "react";
import style from "../Components/css/SearchPanel.module.css";
import { ReactComponent as Search } from "../img/search.svg";
import { ReactComponent as Cancel } from "../img/cancel.svg";
import { ReactComponent as Minus } from "../img/minus_guests.svg";
import { ReactComponent as Plus } from "../img/plus_guests.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function SearchPanel({ fixed }) {
  const [checkIn, setCheckIn] = React.useState("");
  const [checkOut, setCheckOut] = React.useState("");
  const [adults, setAdults] = React.useState(0);
  const [kids, setKids] = React.useState(0);
  const [infants, setInfants] = React.useState(0);
  const [animals, setAnimals] = React.useState(0);
  const [totalGuests, setTotalGuests] = React.useState("게스트 추가");
  const [destination, setDestination] = React.useState("");
  const toWhereRef = React.useRef(null);
  const [where, setWhere] = React.useState(false);
  const guestsRef = React.useRef(null);
  const [showGuests, setShowGuests] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      destination.length > 0 &&
      checkIn &&
      checkOut &&
      totalGuests !== "게스트 추가"
    ) {
      dispatch({
        type: "SET_SEARCH_CONDITION",
        data: {
          destination: destination,
          checkIn: checkIn,
          checkOut: checkOut,
          guests: {
            total: adults + kids,
            adults: adults,
            kids: kids,
            infants: infants,
            animals: animals,
          },
        },
      });
      navigate(`/search`);
    }
  };

  const handleCheckIn = (event) => {
    setCheckIn(event.target.value);
  };

  const handleCheckOut = (event) => {
    setCheckOut(event.target.value);
  };

  React.useEffect(() => {
    setCheckIn(checkIn);
    setCheckOut(checkOut);
  }, [checkIn, checkOut]);

  function cancelDestination() {
    setDestination("");
  }

  function handleDestination(event) {
    setDestination(event.target.value);
  }

  React.useEffect(() => {
    setDestination(destination);
  }, [destination]);

  React.useEffect(() => {
    const pageClickEvent = (event) => {
      if (
        toWhereRef.current !== null &&
        !toWhereRef.current.contains(event.target)
      ) {
        setWhere(false);
      }
    };
    if (where) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [where]);

  React.useEffect(() => {
    const pageClickEvent = (event) => {
      if (
        guestsRef.current !== null &&
        !guestsRef.current.contains(event.target)
      ) {
        setShowGuests(false);
      }
    };
    if (showGuests) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [showGuests]);

  function handleWhere(event) {
    setWhere(true);
  }

  function handleGuests(event) {
    setShowGuests(!showGuests);
  }

  function cancelGuests(event) {
    setAdults(0);
    setKids(0);
    setInfants(0);
    setAnimals(0);
  }

  function plusGuests(event) {
    const target = event.currentTarget.getAttribute("name");
    switch (target) {
      case "adults":
        setAdults((prev) => prev + 1);
        break;

      case "kids":
        setKids((prev) => prev + 1);
        break;

      case "infants":
        setInfants((prev) => prev + 1);
        break;

      case "animals":
        setAnimals((prev) => prev + 1);
        break;

      default:
        break;
    }
  }

  function minusGuests(event) {
    const target = event.currentTarget.getAttribute("name");
    switch (target) {
      case "adults":
        setAdults((prev) => prev - 1);
        break;

      case "kids":
        setKids((prev) => prev - 1);
        break;

      case "infants":
        setInfants((prev) => prev - 1);
        break;

      case "animals":
        setAnimals((prev) => prev - 1);
        break;

      default:
        break;
    }
  }

  React.useEffect(() => {
    if (adults + kids + infants + animals == 0) {
      setTotalGuests("게스트 추가");
    } else {
      setTotalGuests(`게스트 ${adults + kids}명`);
    }

    if (adults == 0 && (kids > 0 || infants > 0 || animals > 0)) {
      setAdults(1);
    }

    if (infants > 0 && animals > 0) {
      setTotalGuests(`게스트 ${adults + kids}명, 유아 ${infants}명`);
    } else if (infants > 0) {
      setTotalGuests(`게스트 ${adults + kids}명, 유아 ${infants}명`);
    } else if (animals > 0) {
      setTotalGuests(`게스트 ${adults + kids}명, 반려동물 ${animals}마리`);
    }
  }, [adults, kids, infants, animals]);

  return (
    <div className={style.search}>
      <button
        type="button"
        className={
          fixed
            ? `${style.searchPanel}`
            : `${style.searchPanel} ${style.nonFixed}`
        }
      >
        <span className={style.startSearching}>검색 시작하기</span>
        <div className={style.searchBtn}>
          <Search width="12px" height="12px" />
        </div>
      </button>
      {fixed ? null : (
        <form className={style.searchForm} onSubmit={handleSubmit}>
          <div className={style.searchFormContainerWrapper}>
            <div className={style.formContainer}>
              <div className={style.formWrapper}>
                <div className={style.category}>
                  <div className={style.stayandexperience}>
                    <div className={style.stay}>
                      <button type="button" className={style.stayBtn}>
                        숙소
                      </button>
                    </div>
                    <div className={style.experience}>
                      <button type="button" className={style.experienceBtn}>
                        체험
                      </button>
                    </div>
                  </div>
                  <div className={style.onlineExperience}>
                    <button type="button" className={style.onlineExperienceBtn}>
                      <Link
                        to="/online"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        온라인 체험
                      </Link>
                    </button>
                  </div>
                </div>
                <div className={style.tabPanelWrapper}>
                  <div className={style.tabPanel}>
                    <div className={style.where}>
                      <div className={style.whereContainer}>
                        <label htmlFor="toWhere" className={style.toWhere}>
                          <div>
                            <div>위치</div>
                            <input
                              id="toWhere"
                              placeholder="어디로 여행가세요?"
                              onChange={handleDestination}
                              value={destination}
                              onClick={handleWhere}
                              required
                            ></input>
                          </div>
                        </label>
                        <div className={style.cancelContainer}>
                          {destination.length > 0 && where ? (
                            <button
                              type="button"
                              onClick={cancelDestination}
                              className={style.cancelBtn}
                            >
                              <Cancel />
                            </button>
                          ) : null}
                        </div>
                        {where ? (
                          <div className={style.flexibleSearchContainer}>
                            <div
                              ref={toWhereRef}
                              className={style.flexibleSearch}
                            >
                              <span>언제 어디로든 떠나는 여행</span>
                              <Link
                                to="/flex/farm"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                <div>
                                  유연한 검색
                                  <video
                                    preload="auto"
                                    autoPlay
                                    playsInline
                                    poster="https://a0.muscache.com/pictures/04c0a34f-9880-48b7-a69c-49011f602a35.jpg"
                                    src="https://a0.muscache.com/videos/vopt/13/e1/13e14ffc-822c-5e84-aa58-d6a6527dc218/13e14ffc822c5e84aa58d6a6527dc218.mp4?impolicy=low_quality"
                                  />
                                </div>
                              </Link>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className={style.divider}></div>
                    <div className={style.checkWhen}>
                      <div className={style.checkInWrapper}>
                        <div className={style.checkIn}>
                          <div type="button" className={style.checkInContainer}>
                            <div className={style.checkInDesc}>체크인</div>
                            <input
                              type="date"
                              className={style.checkInInput}
                              onChange={handleCheckIn}
                              placeholder="날짜 입력"
                              required
                            ></input>
                          </div>
                        </div>
                      </div>
                      <div className={style.divider}></div>
                      <div className={style.checkOutWrapper}>
                        <div className={style.checkOut}>
                          <div
                            type="button"
                            className={style.checkOutContainer}
                          >
                            <div className={style.checkInDesc}>체크아웃</div>
                            <input
                              type="date"
                              className={style.checkOutInput}
                              onChange={handleCheckOut}
                              placeholder="날짜 입력"
                              required
                            ></input>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={style.divider}></div>
                    <div className={style.guestsAndBtn}>
                      <div className={style.guests} onClick={handleGuests}>
                        <div className={style.guestsBtn}>
                          <div>인원</div>
                          <div className={style.numberOfGuests}>
                            {totalGuests}
                          </div>
                        </div>
                        <div className={style.cancelContainer}>
                          {totalGuests !== "게스트 추가" && showGuests ? (
                            <button
                              type="button"
                              onClick={cancelGuests}
                              className={style.cancelBtn}
                            >
                              <Cancel />
                            </button>
                          ) : null}
                        </div>
                      </div>
                      <div className={style.panelSearchBtn}>
                        <button type="submit">
                          <Search width="16px" height="16px" />
                        </button>
                      </div>
                      {showGuests ? (
                        <div
                          ref={guestsRef}
                          className={style.guestsCounterContainer}
                        >
                          <div className={style.guestsCounter}>
                            <div className={style.counterSection}>
                              <div className={style.guestsSection}>
                                <div className={style.guestsCategory}>
                                  <h3>성인</h3>
                                  <span>만 13세 이상</span>
                                </div>
                                <div className={style.counter}>
                                  <button
                                    type="button"
                                    name="adults"
                                    className={style.countBtn}
                                    onClick={minusGuests}
                                    disabled={
                                      adults == 1 &&
                                      (kids > 0 || infants > 0 || animals > 0)
                                        ? true
                                        : adults > 0
                                        ? false
                                        : true
                                    }
                                  >
                                    <Minus />
                                  </button>
                                  <div className={style.count}>{adults}</div>
                                  <button
                                    type="button"
                                    name="adults"
                                    className={style.countBtn}
                                    onClick={plusGuests}
                                    disabled={
                                      adults + kids >= 16 ? true : false
                                    }
                                  >
                                    <Plus />
                                  </button>
                                </div>
                              </div>
                              <div className={style.guestsSection}>
                                <div className={style.guestsCategory}>
                                  <h3>어린이</h3>
                                  <span>만 2~12세</span>
                                </div>
                                <div className={style.counter}>
                                  <button
                                    type="button"
                                    name="kids"
                                    className={style.countBtn}
                                    onClick={minusGuests}
                                    disabled={kids > 0 ? false : true}
                                  >
                                    <Minus />
                                  </button>
                                  <div className={style.count}>{kids}</div>
                                  <button
                                    type="button"
                                    name="kids"
                                    className={style.countBtn}
                                    onClick={plusGuests}
                                    disabled={
                                      adults + kids >= 16 ? true : false
                                    }
                                  >
                                    <Plus />
                                  </button>
                                </div>
                              </div>
                              <div className={style.guestsSection}>
                                <div className={style.guestsCategory}>
                                  <h3>유아</h3>
                                  <span>만 2세 미만</span>
                                </div>
                                <div className={style.counter}>
                                  <button
                                    type="button"
                                    name="infants"
                                    className={style.countBtn}
                                    onClick={minusGuests}
                                    disabled={infants > 0 ? false : true}
                                  >
                                    <Minus />
                                  </button>
                                  <div className={style.count}>{infants}</div>
                                  <button
                                    type="button"
                                    name="infants"
                                    className={style.countBtn}
                                    onClick={plusGuests}
                                    disabled={infants >= 5 ? true : false}
                                  >
                                    <Plus />
                                  </button>
                                </div>
                              </div>
                              <div className={style.guestsSection}>
                                <div className={style.guestsCategory}>
                                  <h3>반려동물</h3>
                                  <a
                                    href="#"
                                    style={{ textDecoration: "none" }}
                                  >
                                    <strong>보조동물을 동반하시나요?</strong>
                                  </a>
                                </div>
                                <div className={style.counter}>
                                  <button
                                    type="button"
                                    name="animals"
                                    className={style.countBtn}
                                    onClick={minusGuests}
                                    disabled={animals > 0 ? false : true}
                                  >
                                    <Minus />
                                  </button>
                                  <div className={style.count}>{animals}</div>
                                  <button
                                    type="button"
                                    name="animals"
                                    className={style.countBtn}
                                    onClick={plusGuests}
                                    disabled={animals >= 5 ? true : false}
                                  >
                                    <Plus />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className={style.counterDesc}>
                              <span>
                                반려동물을 3마리 이상 동반하는 경우, 반드시
                                호스트에게 알려주세요.
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
