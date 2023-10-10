import React from "react";
import { renderRoutes } from "react-router-config";
import routes from "../../routes";
function Home(props) {
  return (
    <div>
      <div>Home</div>
      {renderRoutes(routes)}
    </div>
  );
}

export default React.memo(Home);
