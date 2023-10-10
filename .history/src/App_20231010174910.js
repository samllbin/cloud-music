import React from "react";
import { GlobalStyle } from "./style";
import { IconStyle } from "./assets/iconfont/iconfont";
import routes from "./routes/index.js";
import { useRoutes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <div>{useRoutes(routes)}</div>
    </div>
  );
}

export default App;
