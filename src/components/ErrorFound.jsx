import { NavLink,  useNavigate } from "react-router-dom";

export const ErrorFound = () => {

  let navigate = useNavigate();

  return (
    <div className="container w-50 h-50 d-flex flex-column align-items-center justify-content-center">
      <img
        className="w-100 h-auto"
        src="https://cdn.svgator.com/images/2024/04/animated-3D-404-not-found-page-error.gif"
        alt="404 not found"
      />
      <p className="text-center fs-5">Page Not Found</p>
      {/* this will send you at home page  */}
      {/* <NavLink to="/" className='btn btn-primary'>Go At Home Page</NavLink> */}

      {/* this will send you previous page */}
      <button onClick={() => navigate(-1)} className="btn btn-primary">
        previous Page
      </button>
    </div>
  );
};
