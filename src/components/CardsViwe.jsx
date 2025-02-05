import { useParams } from "react-router-dom";
import movie from "../api/movie.json";

export const CardsViwe = () => {
  const id = useParams(); // Extract the id parameter from useParams

  return (
    <div className="text-center container my-5">
      {movie.map((item) => { 
        if (item.imdbID === id.imdbID) {
          return (
            <div
              key={item.imdbID}
              className="d-flex justify-content-md-around flex-sm-row flex-column ">
              <div>
                <img src={item.Poster} alt={item.Title} />
              </div>
              <div className="align-content-center mx-4">
                <h4>{item.Title}</h4>
                <h5>Type : {item.Type}</h5>
                <h5>Year : {item.Year}</h5>
                <p></p>
                <a
                  href="https://www.hotstar.com/in/explore"
                  className="btn btn-secondary py-0 w-100"
                  target="blenk">
                  Watch Now
                </a>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
