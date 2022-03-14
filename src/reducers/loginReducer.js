export default function loginReducer(currentState, action) {
  if (currentState === undefined) {
    return {
      login: false,
      text: "로그인",
      way: "",
    };
  }

  const newState = { ...currentState };
  if (action.type === "LOGIN_SUCCESS") {
    newState.login = true;
    newState.text = "로그아웃";
    newState.way = action.data;
  } else if (action.type === "LOGOUT_SUCCESS") {
    newState.login = false;
    newState.text = "로그인";
    newState.way = undefined;
  }
  return newState;
}
