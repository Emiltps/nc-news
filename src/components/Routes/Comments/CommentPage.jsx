import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";

export default function CommentPage() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const { article_id } = useParams();

  function addComment(newComment) {
    setComments((prevComments) => [newComment, ...prevComments]); //move to comment page
  }

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
  return (
    <>
      <button onClick={() => setShowForm((prev) => !prev)}>
        {showForm ? "Hide comment form" : "Click here to add a new comment"}
      </button>
      {showForm && (
        <CommentForm article_id={article_id} addComment={addComment} />
      )}
      <section className="comments-list">
        {comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </section>
    </>
  );
}
