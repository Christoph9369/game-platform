import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "74fbe2942191494fb3ac779907e237d5",
  },
});
