const initialState = {
  login: false,
};

export const userAction = (data) => {
  return {
    type: "LOGIN",
    data: data,
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        login: action.data.login,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default userReducer;
