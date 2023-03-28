import { Outlet, Link } from "react-router-dom";
import { Buttons } from "../stateStyle";
const Layout = () => {
  return (
    <>
      <nav className="navul">
        <ul>
          <li>
            <Link to="/about">Kompaniya haqida</Link>
          </li>
          <li>
            <Link to="/facts">faktlar</Link>
          </li>
          <li>
            <Link className="a" to="/mahsulot">MAHSULOT</Link>
          </li>
          <select  id="lang">
            <option className="option" value="uz">uz</option>
            <option className="option" value="ru">ru</option>
          </select>
          <Buttons>buyurtma berish</Buttons>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
