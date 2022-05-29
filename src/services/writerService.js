import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/writer";

export function getwriters(userid, searchQuery) {
  return http.get(`${apiEndpoint}/GetWriters`, {
    params: {
      userid: userid,
      searchQuery: searchQuery === "" ? "null" : searchQuery,
    },
  });
}

export function getwriterposts(userid) {
  return http.get(`${apiEndpoint}/GetWriterPosts`, {
    params: {
      userid: userid,
    },
  });
}
