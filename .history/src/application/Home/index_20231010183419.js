import React from "react";
import { Outlet } from "react-router-dom";
function Home(props) {
  return (
    <div>
      <div>Home</div>
      <Outlet />
    </div>
  );
}

export default React.memo(Home);
