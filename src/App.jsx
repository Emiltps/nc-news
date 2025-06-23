import { useState } from "react";
import Header from "./components/Navigation/Header";
import "./App.css";
import ArticlesPage from "./components/Routes/ArticlesPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ArticlesPage />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
