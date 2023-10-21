import { useEffect } from "react";
import { Route, Navigate, Routes, useLocation } from "react-router-dom";
import Layout from "./components/layout";

import { Home, Error, Login, SignUp, Profile } from "./pages";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace="true" to="/auth" />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Home />} />
          <Route path="/about-us" element={<Home />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/404" element={<Error />} />
          <Route path="/*" element={<Navigate replace to="/404" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
