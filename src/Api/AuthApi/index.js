import Axios from "axios";

const BASE_URL = "https://reqres.in/api";

export function loginUser(user) {
  const url = BASE_URL + "/login";
  return Axios.post(url, user).then((data) => data.data);
}
