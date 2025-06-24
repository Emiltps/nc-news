import { useState } from "react";
import Header from "./components/Navigation/Header";
import "./App.css";
import ArticlesPage from "./components/Routes/Article/ArticlesPage";
import SingleArticle from "./components/Routes/Article/SingleArticle";
import { Routes, Route } from "react-router-dom";
import CommentPage from "./components/Routes/Comments/CommentPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesPage />} />
        <Route
          path="/articles/:article_id"
          element={
            <>
              <SingleArticle />
              <CommentPage />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
