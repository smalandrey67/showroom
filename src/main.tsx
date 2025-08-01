import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes/router.tsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Home.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
