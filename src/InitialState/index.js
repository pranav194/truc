const initialState = {
  loggedIn: {
    token: localStorage.getItem("token"),
  },
  customers: [],
};

export default initialState;
