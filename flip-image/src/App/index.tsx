import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../pages/Main";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
