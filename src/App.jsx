import Contact from "./pages/Contact";
import Schedule from "./pages/Schedule";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/contact", element: <Contact /> },
  { path: "/schedule", element: <Schedule /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
