import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../service/api-client";

interface Genre {
  id: number;
  name: string;
}
interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGeners = () => {
  const [genre, setgenre] = useState<Genre[]>([]);
  const [error, seterror] = useState("");
  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setgenre(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) seterror("");
      });
    60;
    return () => controller.abort();
  }, []);

  return { genre, error };
};
export default useGeners;
