import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { Controller } from "react-hook-form";
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
  metacritic: number;
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
    const controller = new AbortController();
    setloading(true);
    apiClient
      .get<FetchGameResponse>("/games")
      .then((res) => {
        setgame(res.data.results);
        setloading(false);
      })
      .catch((err) => console.log(seterror(err.message)));
    60;
    return () => controller.abort();
  }, []);

  return { game, error, isloading };
};

export default useGames;
