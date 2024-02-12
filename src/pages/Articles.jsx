import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  console.log("Article rendering");
  useEffect(() => {
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts")
      .then((data) => data.json())
      .then((data) => {
        setArticles(data.blogs);
        console.log("Data:", data.blogs);
        console.log("1:", articles);
      });
  }, []);
  console.log("2:", articles);

  return (
    <div className="article-container wrapper">
      <h2>List of articles:</h2>
      <div className="article">
        {articles.map((item) => {
          return (
            <div className="article-card" id={item.id}>
              <div>
                <h3>{item.title}</h3>
                <h4>Theme: {item.category}</h4>
                <p>{item.description}</p>
              </div>
              <div>
                <img src={item.photo_url} alt="" />
              </div>
              <Link
                className="linkReact"
                id={item.id}
                to={"/articles/" + item.id}
              >
                <div className="goto">Go to read:</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
