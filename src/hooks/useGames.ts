import useData from "./useData";
import { Genre } from "./useGeners";

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

const useGames = (selectedgenre: Genre | null) =>
  useData<Games>("/games", { params: { genres: selectedgenre?.id } }, [
    selectedgenre?.id,
  ]);

export default useGames;
