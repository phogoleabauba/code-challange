import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Users from "./app/pages/Users";
import Header from "./app/components/Header";
import ErrorPage from "./app/components/ErrorPage";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container mt-4 pt-4">
        <Header />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/404" element={<ErrorPage errorCode={404} />} />
          <Route path="/500" element={<ErrorPage errorCode={500} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
