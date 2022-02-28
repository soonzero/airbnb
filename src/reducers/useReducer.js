const initialState = {
  email: "zero@so.on",
  name: "zero",
};

export const userAction = (data) => {
  return {
    type: "user",
    data: data,
  };
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "user": {
      return {
        ...state,
        email: action.data.email,
        name: action.data.name,
      };
    }
    default {
        return {
            ...state
        }
    }
  }
};

export default userReducer