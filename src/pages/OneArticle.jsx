import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export const OneArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const navigate = useNavigate();

  console.log("OneArticle rendering");
  useEffect(() => {
    fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`)
      .then((data) => data.json())
      .then((data) => {
        setArticle(data.blog);
      });
  }, []);
  console.log(article);
  const toArticles = () => {
    navigate("/articles");
  };
  return (
    <div className="one-article wrapper">
      <h3 onClick={toArticles} style={{ cursor: "pointer", color: "blue" }}>
        {"<"} Back to articles
      </h3>
      <h1>{article.title}</h1>
      <p>{article.content_text}</p>
      <h3 onClick={toArticles} style={{ cursor: "pointer", color: "blue" }}>
        {"<"} Back to articles
      </h3>
    </div>
  );
};
