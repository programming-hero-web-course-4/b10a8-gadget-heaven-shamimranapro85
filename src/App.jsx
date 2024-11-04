import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navber from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import Home from "./components/pages/Home";
import Details from "./components/pages/details";

function App() {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];

  useEffect(() => {
    document.title =
      pathname == "/"
        ? "Home | Gadget Heaven"
        : currentPath + " | Gadget Heaven";
    return () => {};
  }, [pathname]);

  const m_v_pages = "mx-2"

  return (
    <>
      <div>
        <div
          className={` ${
            pathname == "/" ? "bg-[#9538E2]" : ""
          } rounded-tl-2xl rounded-tr-2xl ${m_v_pages}  mt-2`}
        >
          {" "}
          <Navber />
        </div>
        <div className="">
          <Routes>
            <Route path="/" element={<Home m_v_pages={m_v_pages} />} />
            <Route path="/details" element={<Details/>}/>
            <Route path="*" element={<h1 className="text-center h-[80vh]">NOT FOUND 404</h1>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
