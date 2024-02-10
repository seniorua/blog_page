import { Link } from "react-router-dom";

export const LinkNav = ({ name, href }) => {
  console.log('LinkNav rendering')

  return (
    <Link className="link-nav" to={href}>
      {name}
    </Link>
  );
};
