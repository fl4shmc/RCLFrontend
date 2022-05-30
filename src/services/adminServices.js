import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/admin";

export function getAllUsers() {
  return http.get(`${apiEndpoint}/GetAllUsers`);
}
