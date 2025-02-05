import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <section className="footersection1 container">
        <div className="text-white ">MovieGram</div>
        <div>
          <NavLink to="/about" className="about-healding">
            About Us
          </NavLink>
          <p className="about-item">Smart Search</p>
          <p className="about-item">Access</p>
          <p className="about-item">Hot Content Catalogue</p>
        </div>
        <div>
          <a className="about-healding" href="#">
            Need Help
          </a>
          <br />
          <p className="about-item">Visit Help Center</p>
          <p className="about-item">Ethical Sourcing</p>
        </div>
        <div>
          <a className="about-healding " href="#">
            Connect US
          </a>
          <div className="connect-us d-flex justify-content-start">
            <a
              href="https://www.linkedin.com/in/suraj-jaiswal-1518a5275/"
              target="blenk"
              className="about-item fs-5 me-4">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/surajjaiswal-cmd"
              target="blenk"
              className="about-item fs-5">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};
