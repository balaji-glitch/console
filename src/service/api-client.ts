import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "abf037dd623b424288b3f02ee580aded",
  },
});
