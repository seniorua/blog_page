import { Header } from "./conponents/Header";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>{Outlet}</main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};
