import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { ErrorFound } from "./components/ErrorFound";
import { Home } from "./components/Home";
import { Movie } from "./components/Movie";
import { CardsViwe } from "./components/CardsViwe";
import { Services } from "./components/Services";
import { About } from "./components/About";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movie",
          element: <Movie />,
        },
        {
          path: "movie/:imdbID",
          element: <CardsViwe />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        { 
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
