import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";

export default function CommentPage() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  useEffect(() => {
    fetch(
      `https://news-backend-ul66.onrender.com/api/articles/${article_id}/comments`
    )
      .then((res) => res.json())
      .then((data) => {
        setComments(data.comments);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, [article_id]);
  if (isLoading) return <p>Loading comments...</p>;
  else if (comments.length === 0) return <p>No comments...</p>;

  return (
    <section className="comments-list">
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </section>
  );
}
