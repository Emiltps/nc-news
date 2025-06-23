import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://news-backend-ul66.onrender.com/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
  if (isLoading) return <p>Loading articles...</p>;

  return (
    <section className="articles-list">
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </section>
  );
}
