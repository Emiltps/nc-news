import { useState } from "react";

function VoteButtons({ article_id, currentVotes }) {
  const [voteChange, setVoteChange] = useState(0);
  const [error, setError] = useState(null);

  const IncrementVote = (increment) => {
    setVoteChange((prev) => prev + increment);

    fetch(`https://news-backend-ul66.onrender.com/api/articles/${article_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inc_votes: increment }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Vote failed");
      })
      .catch(() => {
        setVoteChange((prev) => prev - increment);
        setError("Voting failed. Please try again.");
      });
  };
  return (
    <>
      <p>Votes: {currentVotes + voteChange}</p>
      <div className="vote-container">
        <button
          aria-label="Upvote the comment"
          className="vote-button"
          onClick={() => IncrementVote(1)}
        >
          <strong>+</strong>
        </button>
        <button
          aria-label="Downvote the comment"
          className="vote-button"
          onClick={() => IncrementVote(-1)}
        >
          <strong>–</strong>
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </>
  );
}

export default VoteButtons;
