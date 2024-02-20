import { useRef, useContext } from "react";
import { ArticleContext } from "../App";

export const NewArticle = () => {
  const {articles, setArticles } = useContext(ArticleContext);
  const title = useRef(undefined);
  const description = useRef(undefined);
  const category = useRef(undefined);
  const content_text = useRef(undefined);
  
  const creareArticlePress = () => {
    const NewArticle = {
      title: title.current.value,
      decription: description.current.value,
      category: category.current.value,
      img: `https://api.slingacademy.com/public/sample-blog-posts/${articles.length}.png`,
      content_text: content_text.current.value,
    }
    // setArticles(NewArticle);
  }
  return (
    <div className="wrapper">
      <h1>New Article:</h1><br />
      <div className="new-article">
        <input ref={title} type="text" placeholder="Title" />
        <input ref={category} type="text" placeholder="Category" />
        <input ref={description}  type="text" placeholder="Describtion of article" />
        {/* <img src="" alt="img" /> */}
        <textarea
          ref={content_text}
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
