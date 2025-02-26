import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import Page404 from "./pages/Page404";
import "./styles/style.css"; //EXECUTE
import ShowPics from "./pages/ShowPics";
import Resume from "./pages/Resume";
import CalculateScore from "./pages/CalculateScore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="Resume" element={<Resume />}></Route>
          <Route path="CalculateScore" element={<CalculateScore />}></Route>
          <Route path="ShowPics" element={<ShowPics />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
