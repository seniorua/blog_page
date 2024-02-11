import { Link, NavLink } from "react-router-dom";

export const LinkNav = ({ name, href }) => {
  console.log('LinkNav rendering')

  return (
    <NavLink className={(isActive) => {
      console.log(isActive);
      return isActive.isActive ? "link-nav active border" : "link-nav";
    }} to={href}>
      {name}
    </NavLink>
  );
};
