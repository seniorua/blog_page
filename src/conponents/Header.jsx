import { headerLinkData } from "../constants/header_link_data";
import { LinkNav } from "./LinkNav";
import { Link } from "react-router-dom";

export const Header = () => {
  console.log("Header rendering");
  return (
    <div className="header-inner">
      <Link to="/">
        <div className="logo">
          <h1>
            CSB<span>&copy;</span>
          </h1>
          <p>Cool Styled Blog</p>
        </div>
      </Link>
      <nav className="header-nav">
        {headerLinkData.map((item) => {
          return <LinkNav key={item.name} name={item.name} href={item.href} />;
        })}
      </nav>
    </div>
  );
};
