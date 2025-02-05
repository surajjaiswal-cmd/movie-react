import { useState } from "react";

export const GoTop = () => {
  const [gotop, setGotop] = useState(true);

  window.onscroll = function () {
    if (window.pageYOffset > 400) {
      setGotop(false);
    } else {
      setGotop(true);
    }
  };

  return (
    <a
      href="#"
      className={`btn btn-dark ${gotop ? "d-none" : "d-block"}`}
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        zIndex: "10",
      }}>
      <i className="fa-solid fa-arrow-up"></i>
    </a>
  );
};

//
