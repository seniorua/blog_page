import { Header } from "./conponents/Header";
import { Main } from "./conponents/Main";
import { Footer } from "./conponents/Footer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import { Article } from "./pages/Article";
import { NotFoundPage } from "./pages/NotFoundPage";

export const App = () => {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/articles" element={<Article />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes> 
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};
