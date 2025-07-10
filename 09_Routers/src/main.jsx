import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import { Layout, Home, About, Userpage, Github, Contact } from "./index";
import { githubLoader } from "./components/Github";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route
        loader={githubLoader}
        path="github"
        element={<Github />}
      />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
