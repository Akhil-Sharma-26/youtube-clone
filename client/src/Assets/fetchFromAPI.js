import axios from "axios";
// const axios = require("axios");
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  //   url: BASE_URL,
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY_,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
// We are not going to use GET, instead we use axios
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
// This is the function that fetches data from API and now we can use it in any Component. Here it is fetching some url