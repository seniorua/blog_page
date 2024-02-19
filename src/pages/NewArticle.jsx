import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export const NewArticle = () => {
  const navigate = useNavigate();
  const title = useRef(undefined);
  const content = useRef(undefined);
  
  const toArticles = () => {
    navigate("/");
  };
  
  const creareArticlePress = () => {
    console.log('title: ', title);
    console.log('content: ', content);
  }
  return (
    <div className="wrapper">
      <h1>New Article:</h1><br />
      <div className="new-article">
        {/* <h3 onClick={toArticles} style={{ cursor: "pointer", color: "blue" }}>
          {"<"} сделать, чтоб возвращалась на шаг назад
          {"< "}Home
        </h3> */}
        <input ref={title} type="text" placeholder="Title" />
        <input type="text" placeholder="Category" />
        <input type="text" placeholder="Describtion of article" />
        <textarea
          ref={content}
          name="content"
          id=""
          cols="30"
          rows="10"
          placeholder="Content of article"
        ></textarea>
        <button className="create-article-button" onClick={creareArticlePress}>Create the article</button>
      </div>
    </div>
  );
};
