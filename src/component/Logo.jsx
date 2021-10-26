import { Link } from "react-router-dom";

const Logo = () => (
  <div className="logo">
    <Link to="/">
        <img src="/logo.png"/>
    </Link>
  </div>
);

export default Logo;
