import { useLocation, useNavigate } from "react-router-dom";

export const OneArticle = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const toArticles = () => {
    navigate("/articles");
  };

  return (
    <div className="one-article wrapper">
      <h3 onClick={toArticles} style={{ cursor: "pointer", color: "blue" }}>
        {"<"} Back to articles
      </h3>
      <h1>{location.state.title}</h1>
      <p>{location.state.content_text}</p>
      <h3 onClick={toArticles} style={{ cursor: "pointer", color: "blue" }}>
        {"<"} Back to articles
      </h3>
    </div>
  );
};
