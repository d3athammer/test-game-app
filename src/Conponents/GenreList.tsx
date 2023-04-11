import React from "react";
import useData from "../Hooks/useData";
import useGenres from "../Hooks/useGenres";

const GenreList = () => {
  // useGenres access generic useData
  const { data } = useGenres();

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
