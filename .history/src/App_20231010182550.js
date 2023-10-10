import React from "react";
import { IconStyle } from "./assets/iconfont/iconfont";
import { GlobalStyle } from "./style";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        <i className="iconfont">&#xe62b;</i>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
