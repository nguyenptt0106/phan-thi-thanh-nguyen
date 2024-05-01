import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Problem1 from "./pages/problem1";
import Problem2 from "./pages/problem2";
import Menu from "./components/Menu/Menu";

const router = createBrowserRouter([
  {
    path: "/problem-1",
    element: <Problem1/>,
  },
  {
    path: "/problem-2",
    element: <Problem2/>,
  },
  {
    path: "/",
  },
]);

const App = () => {
  return (
    <div className="App">
      <Menu/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
