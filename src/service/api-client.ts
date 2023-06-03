import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "085e407a15ca4174b5ae8c4fd2248670",
  },
});
