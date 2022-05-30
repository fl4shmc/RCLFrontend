import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/user";

export function register(user) {
  return http.post(`${apiEndpoint}/Register`, {
    UserId: user.userid,
    Password: user.password,
    FirstName: user.firstname,
    LastName: user.lastname,
    EmailAddress: user.email,
  });
}
