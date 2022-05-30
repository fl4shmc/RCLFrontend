import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/post";

export function post(post) {
  return http.post(`${apiEndpoint}/PublishPost`, {
    Title: post.title,
    Poste: post.post,
    UserId: post.userid,
  });
}
