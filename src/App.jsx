import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import { Article } from "./pages/Article";
import { NotFoundPage } from "./pages/NotFoundPage";
import { MainLayout } from "./leyouts/MainLayout";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/articles" element={<Article />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
