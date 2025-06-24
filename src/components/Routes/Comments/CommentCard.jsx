function CommentCard({ comment }) {
  console.log(comment);
  return (
    <section className="comment-card">
      <h2>Comment author: {comment.author}</h2>
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
      <p>Published: {comment.created_at.substring(0, 10)}</p>
    </section>
  );
}
export default CommentCard;
