import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../application/Home";
import Rank from "../application/Rank";
import Recommend from "../application/Recommend";
import Singers from "../application/Singers";

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "home",
    element: <Home />,
    // children: [
    //   {

    //   }
    // ]
  },
];

export default routes;
