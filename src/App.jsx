import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Navber from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import Home from "./components/pages/Home";
import Details from "./components/pages/details";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Statistics from "./components/pages/Statistics";
import Shop from "./components/shop";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./components/pages/Contact";

function App() {
  const navigate = useNavigate();
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
  const [cartPrice, setCartPrice] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const CloseModal = () => {
    setShowModal(false);
    navigate("/");
  };

  const purchases = (data, price) => {
    setCartPrice(price);
    console.log("purchase");
    if (data.length < 1) {
      toast.error("can't purchase, please choice product first", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
    } else {
      setShowModal(true);

      setAddCart([]);
    }
  };

  const sortByPrice = (data) => {
    console.log("sorted data");
    console.log(data);
    const desendingData = data.sort((x, y) => y.price - x.price);
    setAddCart([...desendingData]);
  };

  const deleteCartData = (id) => {
    toast.success("user delete from Cart successfully", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });
    const filtered_data = addCart.filter((item) => item.product_id !== id);
    setAddCart(filtered_data);
  };
  const deletefavtData = (id) => {
    toast.success("user delete from whitelist. successfully", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });
    const filtered_data = addfav.filter((item) => item.product_id !== id);
    setAddfav(filtered_data);
  };
  const setAddCartElement = (item) => {
    const checking = addCart.some(
      (product) => product.product_id === item.product_id
    );

    if (checking) {
      toast.warning("Already Added to cart", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
    } else {
      toast.success("Successfully added to Cart", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
      setAddCart([...addCart, item]);
    }
  };
  const setAddfavElement = (item) => {
    const checking = addfav.some(
      (product) => product.product_id === item.product_id
    );
    if (checking) {
      toast.warning("Already Added to whitelist", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
    } else {
      toast.success("successfully added to whitelist", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
      setAddfav([...addfav, item]);
    }
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
                  purchases={purchases}
                  sortByPrice={sortByPrice}
                  setAddCartElement={setAddCartElement}
                  deletefavtData={deletefavtData}
                  deleteCartData={deleteCartData}
                />
              }
            />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/Contact" element={<Contact />} />
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
      <ToastContainer />
      {showModal && (
        <div className="absolute w-screen h-screen top-0 right-0 text-center flex items-center justify-center bg-black/40 backdrop-blur-sm z-[200]">
          <div className="rounded-xl md:w-[400px] w-48 md:scale-125 scale-[.6] flex-col bg-white p-5 flex items-center gap-3 justify-center">
            <img src="./Group.png" className="w-16" alt="" />
            <h1 className="border-b pb-2 pt-2 text-gray-800 font-bold text-sm">
              Payment successfully{" "}
            </h1>
            <h1 className=" pb-2 pt-2 text-gray-500 text-sm">
              Thanks for purchasing.
            </h1>
            <h1 className=" pb-2 pt-2 text-gray-500 text-sm">
              Total :{cartPrice}
            </h1>

            <button onClick={() => CloseModal()} className="btn">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
