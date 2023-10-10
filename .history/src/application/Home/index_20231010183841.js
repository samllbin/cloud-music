import React from "react";
import { Outlet } from "react-router-dom";
import { Top } from "./style";

function Home(props) {
  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Outlet />
    </div>
  );
}

export default React.memo(Home);
