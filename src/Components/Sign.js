import React from "react";
import styled from "styled-components";
import { ReactComponent as Close } from "../img/close_login.svg";
import { ReactComponent as Arrow } from "../img/arrow_login.svg";
import { ReactComponent as Facebook } from "../img/facebook_login.svg";
import { ReactComponent as Google } from "../img/google_login.svg";
import { ReactComponent as Apple } from "../img/apple_login.svg";
import { ReactComponent as Email } from "../img/email_login.svg";

import style from "./css/Sign.module.css";

const Container = styled.div`
  max-width: 568px;
  max-height: 100%;
  background-color: white;
  color: black;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  border-radius: 12px;
`;

const CloseBtn = styled.button`
  position: fixed;
  top: 16px;
  left: 16px;
  padding: 8px;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #ebebeb;
  }
`;

export default function Sign({ onSetIsVisible }) {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [countryNumber, setCountryNumber] = React.useState("1");

  const onPhoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  const countryNumberHandler = (event) => {
    const country = event.target.value;
    const number = country.replace(/\D/g, "");
    setCountryNumber(number);
  };

  React.useEffect(() => {
    setPhoneNumber(phoneNumber);
    setCountryNumber(countryNumber);
  }, [countryNumber, phoneNumber]);

  const handleClick = () => {
    onSetIsVisible(false);
  };

  return (
    <Container>
      <CloseBtn onClick={handleClick}>
        <Close />
      </CloseBtn>
      <div className={style.header}>
        <h3>로그인 또는 회원 가입</h3>
      </div>
      <main className={style.main}>
        <div className={style.mainContainer}>
          <div className={style.welcome}>
            <h2>에어비앤비에 오신 것을 환영합니다.</h2>
          </div>
          <form className={style.loginForm}>
            <div className={style.inputs}>
              <div className={style.input}>
                <label className={style.countryInput} htmlFor="country">
                  <div className={style.inputTitle}>국가/지역</div>
                  <select
                    className={style.countrySelection}
                    id="country"
                    onChange={countryNumberHandler}
                  >
                    <option value="미국 (+1)">미국 (+1)</option>
                    <option value="독일 (+49)">독일 (+49)</option>
                    <option value="한국 (+82)">한국 (+82)</option>
                  </select>
                </label>
                <div className={style.arrow}>
                  <Arrow />
                </div>
              </div>
              <div className={style.input}>
                <label className={style.phoneNumberInput}>
                  <div className={style.inputTitle}>전화번호</div>
                  <div className={style.phoneNumberContainer}>
                    <div className={style.countryNumber}>+{countryNumber}</div>
                    <input
                      className={style.phoneNumber}
                      placeholder="(XXX) XXX-XXXX"
                      type="tel"
                      onChange={onPhoneNumberHandler}
                      value={phoneNumber}
                    />
                  </div>
                </label>
              </div>
            </div>
            <div className={style.confirmation}>
              <p>
                전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금
                및 데이터 요금이 부과됩니다.&nbsp;
                <a href="#">
                  <span>개인정보 처리방침</span>
                </a>
              </p>
            </div>
            <div className={style.continueBtn}>
              <button>계속</button>
            </div>
          </form>
        </div>
        <div className={style.divider}>
          <span>또는</span>
        </div>
        <div className={style.socialLoginContainer}>
          <div className={style.socialLogin}>
            <form>
              <button>
                <div className={style.icon}>
                  <Facebook />
                </div>
                <div>페이스북으로 로그인하기</div>
              </button>
            </form>
            <form>
              <button>
                <div className={style.icon}>
                  <Google />
                </div>
                <div>구글로 로그인하기</div>
              </button>
            </form>
            <form>
              <button>
                <div className={style.icon}>
                  <Apple />
                </div>
                <div>Apple 계정으로 계속하기</div>
              </button>
            </form>
            <form>
              <button>
                <div className={style.icon}>
                  <Email />
                </div>
                <div>이메일로 로그인하기</div>
              </button>
            </form>
          </div>
        </div>
      </main>
    </Container>
  );
}
