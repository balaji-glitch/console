import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}
interface FetchGameResponse {
  count: number;
  results: Games[];
}

const useGames = () => {
  const [isloading, setloading] = useState(false);
  const [game, setgame] = useState<Games[]>([]);
  const [error, seterror] = useState("");
  useEffect(() => {
    setloading(true);
    apiClient
      .get<FetchGameResponse>("/games")
      .then((res) => setgame(res.data.results))
      .catch((err) => console.log(seterror(err.message)));
  });

  return { game, error, isloading };
};

export default useGames;
