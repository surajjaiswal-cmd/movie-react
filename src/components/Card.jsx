import { NavLink } from "react-router-dom";

export const Card = ({ curdata }) => {
  return (
    <>
      <NavLink to={`/movie/${curdata.imdbID}`} className="text-dark">
        <li className="card-folder">
          <img src={curdata.Poster} alt="poster" />
          <div className="text-center mb-4">
            <u className="mx-2">{curdata.Title}</u>
          </div>
        </li>
      </NavLink>
    </>
  );
};
