import Contact from "./pages/Contact";
import Schedule from "./pages/Schedule";
import HomePage from "./pages/HomePage";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/contact", element: <Contact /> },
  { path: "/schedule", element: <Schedule /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
