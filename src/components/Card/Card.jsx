import "./card.scss";

import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <Link to={`/${post.id}`} className="cardWrapper hvr-grow">
      <span>{post.title}</span>
      <div>{post.body}</div>
    </Link>
  );
};

export default Card;
