import { Movie } from "./Movie";
import { Services } from "./Services";

// Importing images
import slideImg1 from "../images/slide-img-1.jpg";
import slideImg2 from "../images/slide-img-2.jpg";
import slideImg3 from "../images/slide-img-3.jpg";
import slideImg4 from "../images/slide-img-4.jpg";

export const Home = () => {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col">
            <div
              id="carouselExample"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="3000">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="0"
                  className="active slided"
                  aria-current="true"
                  aria-label="Slide 1"></button>
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"></button>
              </div>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={slideImg1} className="s1-slide" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                  <img src={slideImg2} className="s1-slide" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                  <img src={slideImg3} className="s1-slide" alt="Slide 3" />
                </div>
                <div className="carousel-item">
                  <img src={slideImg4} className="s1-slide" alt="Slide 4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Movie />
      <hr />
      <Services />
    </>
  );
};
