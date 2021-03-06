import React from "react";
import styled from "styled-components";
import { ReactComponent as Close } from "../img/close_login.svg";
import { ReactComponent as Arrow } from "../img/arrow_login.svg";
import { ReactComponent as Facebook } from "../img/facebook_login.svg";
import { ReactComponent as Google } from "../img/google_login.svg";
import { ReactComponent as Apple } from "../img/apple_login.svg";
import { ReactComponent as Email } from "../img/email_login.svg";
import { ReactComponent as Phone } from "../img/phone_login.svg";
import { useDispatch, useSelector } from "react-redux";
import style from "./css/Sign.module.css";
import { useNavigate } from "react-router-dom";

const StContainer = styled.div`
  width: 568px;
  max-width: 568px;
  max-height: 100%;
  background-color: white;
  color: black;
  z-index: ${(props) => (props.modal ? "1001" : "1")};
  border-radius: 12px;
  position: relative;
  box-sizing: border-box;
  border: ${(props) => (props.modal ? null : "1px solid #b0b0b0")};

  ${(props) =>
    props.modal
      ? `position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);`
      : null};

  & > main {
    padding: ${(props) => (props.modal ? "24px" : "32px")};
    box-sizing: border-box;
  }
`;

const StUserID = styled.div`
  border: ${(props) => (props.valid ? "1px solid #b0b0b0" : "2px solid red")};
  border-radius: ${(props) => (props.phoneLogin ? `0 0 8px 8px` : `8px`)};
  box-sizing: border-box;
`;

const StCloseBtn = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 8px;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    background-color: #ebebeb;
  }
`;

const StSocialLogin = styled.form`
  margin-bottom: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const StSocialIcon = styled.div`
  position: absolute;
  box-sizing: border-box;
`;

const StSocialService = styled.div`
  font-size: 14px;
  line-height: 1.7142857143;
  box-sizing: border-box;
`;

export default function Sign(props) {
  const { Kakao } = window;
  const [username, setUsername] = React.useState("");
  const emailReg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{1,3}$/i;
  const [valid, setValid] = React.useState(true);
  const [countryNumber, setCountryNumber] = React.useState(1);
  const [placeholder, setPlaceholder] = React.useState("(XXX) XXX-XXXX");
  const [phoneLogin, setPhoneLogin] = React.useState(true);

  const navigate = useNavigate();

  const onUsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  React.useEffect(() => {
    setUsername(username);
    checkValid();
  }, [username]);

  const checkValid = () => {
    if (!phoneLogin && username.length > 0) {
      if (emailReg.test(username)) {
        setValid(true);
      } else {
        setValid(false);
      }
    } else {
      setValid(true);
    }
  };

  const countryNumberHandler = (event) => {
    const country = event.target;
    const number = country.value.replace(/\D/g, "");
    const index = country.options.selectedIndex;
    const ph = country.options[index].getAttribute("ph");
    setCountryNumber(number);
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
        console.log("????????? ??????", res.scope);
        dispatch({ type: "LOGIN_SUCCESS", data: "kakao" });
        props.onSetIsVisible(false);
      },
      fail: (error) => {
        console.log(error);
      },
    });
  }

  React.useEffect(() => {
    setUsername(username);
    setCountryNumber(countryNumber);
  }, [countryNumber, username]);

  const handleClick = () => {
    props.onSetIsVisible(false);
  };

  function checkAuth() {
    if (phoneLogin) {
      if (
        (countryNumber == 82 && username == "01012345678") ||
        (countryNumber == 49 && username == "15733900671")
      ) {
        dispatch({ type: "LOGIN_SUCCESS", data: "phoneNumber" });
        alert("logged in!");
        props.onSetIsVisible(false);
      } else if (username.length == 0) {
        alert("please put your phone number below");
      } else {
        alert("wrong phone number");
      }
    } else {
      if (username.length == 0) {
        alert("please put your email below");
      } else if (valid) {
        dispatch({ type: "LOGIN_SUCCESS", data: "email" });
        alert("logged in!");
        props.onSetIsVisible(false);
      } else {
        alert("invalid email");
      }
    }
  }

  const dispatch = useDispatch();

  return (
    <StContainer modal={props.modal}>
      {props.modal ? (
        <StCloseBtn onClick={handleClick}>
          <Close type="button" />
        </StCloseBtn>
      ) : null}
      <div className={style.header}>
        <h3>????????? ?????? ????????????</h3>
      </div>
      <main>
        <div className={style.mainContainer}>
          <div className={style.welcome}>
            <h2>?????????????????? ?????? ?????? ???????????????.</h2>
          </div>
          <form className={style.loginForm}>
            <div className={style.inputs}>
              {phoneLogin ? (
                <div className={style.country}>
                  <label className={style.countryInput} htmlFor="country">
                    <div className={style.inputTitle}>??????/??????</div>
                    <select
                      className={style.countrySelection}
                      id="country"
                      onChange={countryNumberHandler}
                      defaultValue={countryNumber}
                    >
                      <option ph="(XXX) XXX-XXXX" value="?????? (+1)" length="10">
                        ?????? (+1)
                      </option>
                      <option ph="XXX XXXX XXXX" value="?????? (+49)" length="11">
                        ?????? (+49)
                      </option>
                      <option value="?????? (+82)" length="11">
                        ?????? (+82)
                      </option>
                    </select>
                  </label>
                  <div className={style.arrow}>
                    <Arrow />
                  </div>
                </div>
              ) : null}
              <StUserID valid={valid} phoneLogin={phoneLogin}>
                <label className={style.userIDInput}>
                  <div className={style.inputTitle}>
                    {phoneLogin ? "????????????" : "?????????"}
                  </div>
                  <div className={style.userIDContainer}>
                    {phoneLogin ? (
                      <div className={style.countryNumber}>
                        {countryNumber ? `+${countryNumber}` : null}
                      </div>
                    ) : null}
                    <input
                      className={style.username}
                      placeholder={phoneLogin ? placeholder : "?????????"}
                      type="tel"
                      onChange={onUsernameHandler}
                      value={username}
                    />
                  </div>
                </label>
              </StUserID>
            </div>
            {phoneLogin ? (
              <div className={style.confirmation}>
                <p>
                  ????????? ????????? ??????????????? ?????????????????????. ?????? ?????? ????????? ??????
                  ??? ????????? ????????? ???????????????.&nbsp;
                  <a href="#">
                    <span style={{ wordBreak: "keep-all" }}>
                      ???????????? ????????????
                    </span>
                  </a>
                </p>
              </div>
            ) : null}
            <div className={style.continueBtn}>
              <button type="button" onClick={checkAuth}>
                ??????
              </button>
            </div>
          </form>
        </div>
        <div className={style.divider}>
          <span>??????</span>
        </div>
        <div className={style.socialLoginContainer}>
          <div className={style.socialLogin}>
            <StSocialLogin>
              <button type="button" onClick={loginWithKakao}>
                <StSocialIcon>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Kakao_Corp._symbol_-_2012.svg/2226px-Kakao_Corp._symbol_-_2012.svg.png"
                    style={{ width: 20, height: "auto", alignSelf: "center" }}
                  ></img>
                </StSocialIcon>
                <StSocialService>????????? ???????????? ???????????????</StSocialService>
              </button>
            </StSocialLogin>
            <StSocialLogin>
              <button type="button">
                <StSocialIcon>
                  <Google />
                </StSocialIcon>
                <StSocialService>????????? ???????????????</StSocialService>
              </button>
            </StSocialLogin>
            <StSocialLogin>
              <button type="button">
                <StSocialIcon>
                  <Apple />
                </StSocialIcon>
                <StSocialService>Apple ???????????? ????????????</StSocialService>
              </button>
            </StSocialLogin>
            <StSocialLogin>
              <button
                type="button"
                onClick={() => setPhoneLogin((prev) => !prev)}
              >
                <StSocialIcon>
                  {phoneLogin ? <Email /> : <Phone />}
                </StSocialIcon>
                <StSocialService>
                  {phoneLogin ? "?????????" : "????????????"}??? ???????????????
                </StSocialService>
              </button>
            </StSocialLogin>
          </div>
        </div>
      </main>
    </StContainer>
  );
}
