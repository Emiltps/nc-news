import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <Link to={`/`}>
        <h1>Chat&Comment</h1>
      </Link>
    </header>
  );
}

export default Header;
