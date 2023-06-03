import useGeners from "../hooks/useGeners";

const Genrelist = () => {
  const { data } = useGeners();
  return (
    <>
      <ul>
        {data.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Genrelist;
