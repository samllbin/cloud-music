import React from "react";

function Recommend(props) {
  const bannerList = [1,2,3,4].map (item => {
    return { imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg" }
  return <div>Recommend</div>;
}

export default React.memo(Recommend);