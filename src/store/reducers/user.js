const initialState = {
  user: "Zac"
};

const userReducer = (state = initialState, action) => {
  return { ...state };
};

export default userReducer;
