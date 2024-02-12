import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  const articleLinkClick = (id) => {
    navigate(`/articles/${id}`, {state: {title: articles[id-1].title, content_text: articles[id-1].content_text}});
    console.log('go!')
    console.log('data: ', articles[id-1].title);
    console.log('text: ', articles[id-1].content_text);
  }
  console.log("Article rendering");
  useEffect(() => {
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts")
      .then((data) => data.json())
      .then((data) => {
        setArticles(data.blogs);
      });
    }, []);
    
  return (
    <div className="article-container wrapper">
      <h2>List of articles:</h2>
      <div className="article">
        {articles.map((item) => {
          return (
            <div className="article-card" key={item.id}>
              <div>
                <h3>{item.title}</h3>
                <h4>Theme: {item.category}</h4>
                <p>{item.description}</p>
              </div>
              <div>
                <img src={item.photo_url} alt="" />
              </div>
              <div
                className="link-react"
                onClick={() => articleLinkClick(item.id)}
                id={item.id}
              >
                <div className="goto">Go to read:</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
