import Contact from "./pages/Contact";
import Schedule from "./pages/Schedule";
import HomePage from "./pages/HomePage";
import KeySpeakers from "./pages/KeySpeakers";
import Ideathon from "./pages/Ideathon";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/contact", element: <Contact /> },
  { path: "/schedule", element: <Schedule /> },
  { path: "//keynote-speaker", element: <KeySpeakers /> },
  { path: "/ideathon", element: <Ideathon /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
