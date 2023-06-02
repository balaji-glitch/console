import { useEffect, useState } from "react";
import apiClient from "./service/api-client";
import { Spinner } from "@chakra-ui/react";
interface Games {
  id: number;
  name: string;
}
interface FetchGameResponse {
  count: number;
  results: Games[];
}

const Gamegrid = () => {
  const [isloading, setloading] = useState(true);
  const [game, setgame] = useState<Games[]>([]);
  const [error, seterror] = useState("");
  useEffect(() => {
    setloading(false);
    apiClient
      .get<FetchGameResponse>("/games")
      .then((res) => setgame(res.data.results))
      .catch((err) => console.log(seterror(err.message)));
  });

  return (
    <>
      <ul>
        {game.map((games) => (
          <li key={games.id}> {games.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Gamegrid;
