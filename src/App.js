import { useEffect } from "react";
import { Route, Navigate, Routes, useLocation } from "react-router-dom";

import { Home, Error } from "./pages";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // to do
  // useEffect(() => {
  //   setTheme(JSON.parse(localStorage.getItesm("theme")));
  // }, [setTheme]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace="true" to="/home" />} />

        <Route path="/home" element={<Home />} />

        <Route path="/404" element={<Error />} />
        <Route path="/*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
