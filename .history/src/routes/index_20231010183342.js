// src/router/index.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../application/Home";
import Recommend from "../application/Recommend";
import Rank from "../application/Rank";
import Singers from "../application/Singers";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="recommend" element={<Recommend />} />
          <Route path="rank" element={<Rank />} />
          <Route path="singers" element={<Singers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
