import { createBrowserRouter } from "react-router-dom";

import { Home } from "../Home";
import { ThankYou } from "../pages/ThankYou/ThankYou";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "thankyou",
    element: <ThankYou />,
  },
]);
