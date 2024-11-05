import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
import SelectedHouse from "./SelectedHouse";
import Home from "./Home";
import AddingNewHouse from "./AddingNewHouse";
import UpdateHouse from "./UpdateHouse";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/selectedHouse/view",
      element: <SelectedHouse />,
      errorElement: <Error />,
    },
    {
      path: "/insertNewHouse",
      element: <AddingNewHouse />,
      errorElement: <Error />,
    },
    {
      path: "/updateHouse",
      element: <UpdateHouse />,
      errorElement: <Error />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
