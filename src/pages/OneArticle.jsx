import { useLocation, useNavigate } from "react-router-dom";

export const OneArticle = () => {
  const navigate = useNavigate();
  const { state }  = useLocation();

  const toArticles = () => {
    navigate("/articles");
  };

  return (
    <div className="one-article wrapper">
      <h4 onClick={toArticles} style={{ cursor: "pointer", color: "blue" }}>
        {"<"} Back to articles
      </h4>
      <h1>{state.title}</h1>
      <p>{state.content_text}</p>
      <h4 onClick={toArticles} style={{ cursor: "pointer", color: "blue" }}>
        {"<"} Back to articles
      </h4>
    </div>
  );
};
