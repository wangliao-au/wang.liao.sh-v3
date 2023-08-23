import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NavBar from "./components/navBar/NavBar";
// import LoadingPage from "./system/LoadingPage";
import ToastError from "./components/ToastError";

type contextType = {
  getters: {
    isLoggedIn: boolean;
  };
  setters: {
    setIsLoggedIn: (value: boolean) => void;
  };
};
const Context = createContext<contextType | null>(null);

const Router: React.FC = () => {
  // In your component
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getters = { isLoggedIn };
  const setters = { setIsLoggedIn };

  //   const [loding, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <Context.Provider value={{ getters, setters }}>
        <div className="flex justify-center flex-col">
          <ToastError />
          <NavBar />
          <div className="content w-full relative h-full">
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<HomePage />} />
            </Routes>
          </div>
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
};

export default Router;
