import { Header } from "../conponents/Header";
import { Footer } from "../conponents/Footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>{<Outlet />}</main>
      <footer>
        <Footer>Hello!</Footer>
      </footer>
    </>
  );
};