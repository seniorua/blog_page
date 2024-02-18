import { useLocation, useNavigate } from "react-router-dom";

export const NewArticle = () => {
  const navigate = useNavigate();
  const { state }  = useLocation();

  const toArticles = () => {
    navigate("/");
  };

  return (
    <div className="new-article wrapper">
      <h4 onClick={toArticles} style={{ cursor: "pointer", color: "blue" }}>
        {/* {"<"} сделать, чтоб возвращалась на шаг назад */}
      </h4>
    </div>
  );
};
