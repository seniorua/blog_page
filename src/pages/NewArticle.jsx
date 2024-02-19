import { useLocation, useNavigate } from "react-router-dom";

export const NewArticle = () => {
  const navigate = useNavigate();
  const { state }  = useLocation();

  const toArticles = () => {
    navigate("/");
  };

  return (
    <div className="new-article wrapper">
      {/* <h3 onClick={toArticles} style={{ cursor: "pointer", color: "blue" }}>
        {"<"} сделать, чтоб возвращалась на шаг назад
        {"< "}Home
      </h3> */}
      <h1>New Article</h1>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Category" />
      <textarea name="content" id="" cols="30" rows="10" placeholder="Content of article."></textarea>
      <textarea name="description" id="" cols="30" rows="10" placeholder="Describe article."></textarea>
    </div>
  );
};
