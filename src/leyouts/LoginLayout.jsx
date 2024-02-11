// import { Header } from "../conponents/Header";
import { Footer } from "../conponents/Footer";
import { Link, Outlet } from "react-router-dom";

export const LoginLayout = () => {
  return (
    <>
      <header className="header-inner" style={{color: "white"}}>
        {<Outlet />}
      </header>
      <main><Link to="/"><h2> Goto Home</h2></Link></main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};