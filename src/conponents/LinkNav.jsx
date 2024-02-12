import { Link, NavLink } from "react-router-dom";

export const LinkNav = ({ name, href }) => {
  console.log('LinkNav rendering')

  return (
    <NavLink className={(active) => {
      // console.log(active);
      return active.isActive ? "link-nav active border" : "link-nav";
    }} to={href}>
      {name}
    </NavLink>
  );
};
