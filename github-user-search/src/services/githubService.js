// src/services/githubService.js
import axios from "axios";

export const fetchUserData = (username) => {
  return axios.get(`https://api.github.com/users/${username}`)
    .then(response => response.data);
};
