import { useState } from "react";
import Header from "./components/Navigation/Header";
import "./App.css";
import ArticlesPage from "./components/Routes/Article/ArticlesPage";
import SingleArticle from "./components/Routes/SingleArticle";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesPage />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
