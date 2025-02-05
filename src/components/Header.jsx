import { NavLink } from "react-router-dom";
import { GoTop } from "./GoTop";
export const Header = () => {
  return (
    <header>
      <div className="headsection  container">
        <div className="text-white  fs-5 my-1">MovieGram</div>
        <div className="nevbar" id="nevbar_option">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movie">Movie</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
      <GoTop />
    </header>
  );
};
