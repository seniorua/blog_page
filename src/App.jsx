import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import { Articles } from "./pages/Articles";
import { OneArticle } from "./pages/OneArticle";
import { NotFoundPage } from "./pages/NotFoundPage";
import { MainLayout } from "./leyouts/MainLayout";
import { LoginLayout } from "./leyouts/LoginLayout";
import { Login } from "./pages/Login";
import { createContext } from "react";
import { NewArticle } from "./pages/NewArticle";



export const ArticleContext = createContext({});

export const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<OneArticle />} />
            <Route path="/new-article" element={<NewArticle />} />
          </Route>
          <Route path="/login" element={<LoginLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </>
  );
};
