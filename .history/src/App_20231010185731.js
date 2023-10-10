import React from "react";
import { IconStyle } from "./assets/iconfont/iconfont";
import { GlobalStyle } from "./style";
import AppRouter from "./routes/index";
import store from "./store/index";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        <i className="iconfont">&#xe62b;</i>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
