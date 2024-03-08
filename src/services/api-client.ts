import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cc0a6102a0a94c308cc883e063de2a38",
  },
});
