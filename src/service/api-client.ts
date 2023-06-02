import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ff2e75114e654426a4c2fb1d036a2a55",
  },
});
