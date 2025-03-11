import { Outlet, Link } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="layout">
      <nav>
        <ul>
          <li>
            <Link to="/">自我介紹</Link>
          </li>
          <li>
            <Link to="/resume">簡歷</Link>
          </li>
          <li>
            <Link to="/calculateScore">成績計算</Link>
          </li>
          <li>
            <Link to="/showPics">圖片搜尋</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
