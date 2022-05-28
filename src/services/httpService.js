import axios from "axios";

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
