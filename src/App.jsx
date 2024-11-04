import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navber from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <div>
        <div
          className={` ${
            pathname == "/" ? "bg-purple-500" : ""
          } rounded-tl-2xl rounded-tr-2xl mx-2 mt-2`}
        >
          {" "}
          <Navber />
        </div>
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={"router"} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
