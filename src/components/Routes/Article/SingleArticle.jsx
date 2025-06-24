import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import VoteButtons from "./VoteButtons";

export default function SingleArticle() {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [voteChange, setVoteChange] = useState(0);
  const { article_id } = useParams();

  useEffect(() => {
    fetch(`https://news-backend-ul66.onrender.com/api/articles/${article_id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data.article);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, [article_id]);
  if (isLoading) return <p>Loading article...</p>;
  else if (!article) return <p>Article not found...</p>;

  return (
    <article className="single-article">
      <img src={article.article_img_url} alt={`Image for ${article.title}`} />
      <div className="article-content">
        <h1>{article.title}</h1>
        <p>Topic: {article.topic}</p>
        <p>Author: {article.author}</p>
        <p>Published: {article.created_at.substring(0, 10)}</p>
        <p>
          Comments: {article.comment_count}
          <VoteButtons article_id={article_id} currentVotes={article.votes} />
        </p>
        <div className="article-body">
          <p>{article.body}</p>
        </div>
      </div>
    </article>
  );
}
