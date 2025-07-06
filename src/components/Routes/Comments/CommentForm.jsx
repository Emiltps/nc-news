import { useState } from "react";
function CommentForm({ article_id, addComment }) {
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState(null);
  console.log({ article_id, username, body });
  function handleSubmit(e) {
    e.preventDefault();
    if (!username || !body) {
      setError("Please fill in both fields");
      return;
    }
    setIsPosting(true);
    setError(null);
    fetch(
      `https://news-backend-ul66.onrender.com/api/articles/${article_id}/comments`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ article_id, username, body }),
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to post comment");
        return res.json();
      })
      .then((data) => {
        addComment(data.comment); // Update parent comment list
        setBody("");
        setUsername("");
      })
      .catch(() => setError("Could not post comment."))
      .finally(() => setIsPosting(false));
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="e.g John_Doe"
        />
      </label>
      <label>
        Enter text
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="e.g. type your comment here"
        />
      </label>
      <button type="submit">Post comment</button>
    </form>
  );
}
export default CommentForm;
