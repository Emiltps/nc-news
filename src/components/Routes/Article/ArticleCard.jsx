import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <img
        src={article.article_img_url}
        alt={`Image for ${article.title}`}
        className="article-image"
      />
      <Link to={`/articles/${article.article_id}`}>
        {" "}
        <h2>{article.title}</h2>
      </Link>
      <p>By: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>
        Votes: {article.votes} | Comments: {article.comment_count}
      </p>
      <p>Published: {article.created_at.substring(0, 10)}</p>
    </article>
  );
}
export default ArticleCard;
