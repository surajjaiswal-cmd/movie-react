// import { useLoaderData } from "react-router-dom";
import { Card } from "./card";
import movie from "../api/movie.json";
import "../styles/Movie.css";
export const Movie = () => {
  // const movie = useLoaderData();

  return (
    <>
      <ul className="all-cards list-unstyled container">
        {movie.map((curdata) => {
          return <Card key={curdata.imdbID} curdata={curdata} />;
        })}
      </ul>
    </>
  );
};
