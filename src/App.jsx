import "./App.css";
import { ReactQueryDevtools } from "react-query/devtools";
import Posts from "./pages/Posts/Posts";
import Post from "./pages/Post/Post";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Posts />,
  },
  {
    path: "/:id",
    element: <Post />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}

export default App;
