import React from "react";
import styled from "styled-components";
import { ReactComponent as Close } from "../img/close_login.svg";
import { ReactComponent as Arrow } from "../img/arrow_login.svg";
import { ReactComponent as Facebook } from "../img/facebook_login.svg";
import { ReactComponent as Google } from "../img/google_login.svg";
import { ReactComponent as Apple } from "../img/apple_login.svg";
import { ReactComponent as Email } from "../img/email_login.svg";
import { useDispatch, useSelector } from "react-redux";
import style from "./css/Sign.module.css";

const StContainer = styled.div`
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

const StCloseBtn = styled.button`
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

const StSocialLogin = styled.form`
  margin-bottom: 16px;
  width: 100%;
`;

const StSocialIcon = styled.div`
  position: absolute;
`;

const StSocialService = styled.div`
  font-size: 14px;
  line-height: 1.7142857143;
`;

export default function Sign({ onSetIsVisible }) {
  const { Kakao } = window;
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [countryNumber, setCountryNumber] = React.useState(1);
  const [placeholder, setPlaceholder] = React.useState("(XXX) XXX-XXXX");
  const [maxlength, setMaxlength] = React.useState(10);

  const onPhoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  const countryNumberHandler = (event) => {
    const country = event.target;
    const number = country.value.replace(/\D/g, "");
    const index = country.options.selectedIndex;
    const ph = country.options[index].getAttribute("ph");
    const length = country.options[index].getAttribute("length");
    setCountryNumber(number);
    setMaxlength(length);
    if (ph) {
      setPlaceholder(ph);
    } else {
      return setPlaceholder("");
    }
  };

  function loginWithKakao() {
    if (!Kakao.isInitialized()) {
      Kakao.init("cb6e15f3d0964c67b4f03ff5e97f50cc");
    }
    Kakao.Auth.login({
      success: (res) => {
        console.log("로그인 성공", res.scope);
        dispatch({ type: "LOGIN_SUCCESS" });
        onSetIsVisible(false);
      },
      fail: (error) => {
        console.log(error);
      },
    });
  }

  React.useEffect(() => {
    setPhoneNumber(phoneNumber);
    setCountryNumber(countryNumber);
  }, [countryNumber, phoneNumber]);

  const handleClick = () => {
    onSetIsVisible(false);
  };

  function checkAuth() {
    if (
      (countryNumber == 82 && phoneNumber == "01012345678") ||
      (countryNumber == 49 && phoneNumber == "15733900671")
    ) {
      dispatch({ type: "LOGIN_SUCCESS" });
      alert("logged in!");
      onSetIsVisible(false);
    } else {
      alert("wrong phone number");
    }
  }

  const dispatch = useDispatch();

  return (
    <StContainer>
      <StCloseBtn onClick={handleClick}>
        <Close type="button" />
      </StCloseBtn>
      <div className={style.header}>
        <h3>로그인 또는 회원가입</h3>
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
                    defaultValue={countryNumber}
                  >
                    <option ph="(XXX) XXX-XXXX" value="미국 (+1)" length="10">
                      미국 (+1)
                    </option>
                    <option ph="XXX XXXX XXXX" value="독일 (+49)" length="11">
                      독일 (+49)
                    </option>
                    <option value="한국 (+82)" length="11">
                      한국 (+82)
                    </option>
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
                    <div className={style.countryNumber}>
                      {countryNumber ? `+${countryNumber}` : null}
                    </div>
                    <input
                      className={style.phoneNumber}
                      placeholder={placeholder}
                      type="tel"
                      onChange={onPhoneNumberHandler}
                      value={phoneNumber}
                      maxLength={maxlength}
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
              <button type="button" onClick={checkAuth}>
                계속
              </button>
            </div>
          </form>
        </div>
        <div className={style.divider}>
          <span>또는</span>
        </div>
        <div className={style.socialLoginContainer}>
          <div className={style.socialLogin}>
            <StSocialLogin>
              <button type="button" onClick={loginWithKakao}>
                <StSocialIcon>
                  <Facebook />
                </StSocialIcon>
                <StSocialService>카카오 계정으로 로그인하기</StSocialService>
              </button>
            </StSocialLogin>
            <StSocialLogin>
              <button type="button">
                <StSocialIcon>
                  <Google />
                </StSocialIcon>
                <StSocialService>구글로 로그인하기</StSocialService>
              </button>
            </StSocialLogin>
            <StSocialLogin>
              <button type="button">
                <StSocialIcon>
                  <Apple />
                </StSocialIcon>
                <StSocialService>Apple 계정으로 계속하기</StSocialService>
              </button>
            </StSocialLogin>
            <StSocialLogin>
              <button type="button">
                <StSocialIcon>
                  <Email />
                </StSocialIcon>
                <StSocialService>이메일로 로그인하기</StSocialService>
              </button>
            </StSocialLogin>
          </div>
        </div>
      </main>
    </StContainer>
  );
}
