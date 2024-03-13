import React, { useEffect } from "react";
import { useScroll } from "./hook/useScroll";
import { useWindowResize } from "./hook/useWindowResize";
import { HeadBar } from "./component/layout/HeadBar";

function App() {
  const { y } = useScroll();

  useWindowResize();

  return (
    <div
      style={{
        backgroundColor: y > 100 ? "" : "auto",
      }}
    >
      <HeadBar></HeadBar>
      test
    </div>
  );
}

export default App;
