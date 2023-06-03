import useGeners from "../hooks/useGeners";

const Genrelist = () => {
  const { genre } = useGeners();
  return (
    <>
      <ul>
        {genre.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Genrelist;
