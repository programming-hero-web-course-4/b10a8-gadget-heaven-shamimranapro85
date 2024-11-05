import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navber from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import Home from "./components/pages/Home";
import Details from "./components/pages/details";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Statistics from "./components/pages/Statistics";
import Shop from "./components/shop";

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

  const m_v_pages = "mx-2";
  const [addCart, setAddCart] = useState([]);
  const [addfav, setAddfav] = useState([]);
  const deleteCartData = (id) => {
    const filtered_data = addCart.filter((item) => item.product_id !== id);
    setAddCart(filtered_data);
  };
  const deletefavtData = (id) => {
    const filtered_data = addfav.filter((item) => item.product_id !== id);
    setAddfav(filtered_data);
  };
  const setAddCartElement = (item) => {
    localStorage.setItem("cart", JSON.stringify(addCart));
    const checking = addCart.some(
      (product) => product.product_id === item.product_id
    );

    checking ? alert("already add") : setAddCart([...addCart, item]);
  };
  const setAddfavElement = (item) => {
    const checking = addfav.some(
      (product) => product.product_id === item.product_id
    );
    checking ? alert("already add") : setAddfav([...addfav, item]);
  };
  return (
    <>
      <div>
        <div
          className={` sticky top-0 backdrop-blur-sm z-50  border-b  ${
            pathname == "/" ? "bg-[#9538E2]" : "bg-white/40"
          } rounded-tl-2xl rounded-tr-2xl ${m_v_pages}  mt-2`}
        >
          {" "}
          <Navber addCart={addCart} addfav={addfav} />
        </div>
        <div className="">
          <Routes>
            <Route path="/" element={<Home m_v_pages={m_v_pages} />} />
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  addCart={addCart}
                  addfav={addfav}
                  setAddCartElement={setAddCartElement}
                  deletefavtData={deletefavtData}
                  deleteCartData={deleteCartData}
                />
              }
            />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/shopnow" element={<Shop />} />
            <Route
              path="/details"
              element={
                <Details
                  setAddCartElement={setAddCartElement}
                  setAddfavElement={setAddfavElement}
                />
              }
            />
            <Route
              path="*"
              element={<h1 className="text-center h-[80vh]">NOT FOUND 404</h1>}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
