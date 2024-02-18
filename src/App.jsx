import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import { Articles } from "./pages/Articles";
import { OneArticle } from "./pages/OneArticle";
import { NotFoundPage } from "./pages/NotFoundPage";
import { MainLayout } from "./leyouts/MainLayout";
import { LoginLayout } from "./leyouts/LoginLayout";
import { Login } from "./pages/Login";
import { useEffect, useState } from "react";

export const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts")
      .then((data) => data.json())
      .then((data) => {
        setArticles(data.blogs);
      });
    }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/articles" element={<Articles articles={ articles }/>} />
          <Route path="/articles/:id" element={<OneArticle />} />
        </Route>
        <Route path="/login" element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
