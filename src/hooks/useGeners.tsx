import useData from "./useData";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGeners = () => useData<Genre>("/genres");
export default useGeners;
