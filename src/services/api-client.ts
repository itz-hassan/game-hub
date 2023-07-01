import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ac824740b7bb4f4f9b849806c198515f",
  },
});
