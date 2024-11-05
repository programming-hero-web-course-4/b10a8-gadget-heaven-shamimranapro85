import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
const Dashboard = ({
  addCart,
  addfav,
  setAddCartElement,
  deleteCartData,
  deletefavtData,
}) => {
  const [cart, setCart] = useState("Cart");
  const [cartPrice, setCartPrice] = useState(0);
  const handleActive = (e) => {
    console.log(e.target.innerText == "Cart");

    e.target.innerText == "Cart" ? setCart(`Cart`) : setCart("");
  };
  useEffect(() => {
    let prices = 0;
    addCart.map((pr) => {
      prices += pr.price;
    });

    setCartPrice(prices);
  }, [addCart]);

  return (
    <div className="bg-gray-100">
      <div className={`bg-[#9538E2]`}>
        <div className="container mx-auto text-white text-center flex flex-col gap-4 items-center justify-center py-10">
          <h1 className="text-4xl text-center font-bold">Dashboard</h1>
          <p className="text-sm w-7/12 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleActive}
              className={`rounded-full  px-4 py-2 hover:bg-[#9538E2] transition-all duration-300 hover:text-white border  ${
                cart == "Cart"
                  ? "bg-white text-purple-500 hover:bg-white hover:!text-black"
                  : ""
              } `}
            >
              Cart
            </button>
            <button
              onClick={handleActive}
              className={`rounded-full  px-4 py-2 hover:bg-[#9538E2] transition-all duration-300 hover:text-white border  ${
                cart !== "Cart"
                  ? "bg-white text-purple-500 hover:bg-white hover:!text-black"
                  : ""
              } `}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>

      {cart == "Cart" ? (
        <Cart
          addCart={addCart}
          cartPrice={cartPrice}
          deleteCartData={deleteCartData}
        />
      ) : (
        <WishList
          addfav={addfav}
          setAddCartElement={setAddCartElement}
          deletefavtData={deletefavtData}
        />
      )}
    </div>
  );
};

const Cart = ({ addCart, cartPrice, deleteCartData }) => {
  return (
    <>
      <div className="container mx-auto py-2">
        <div className="flex justify-between items-center">
          <div>Cart</div>
          <div className="flex gap-2 items-center">
            <h1 className="text-black font-bold">Total Cost:{cartPrice}</h1>
            <button
              className={`rounded-full  px-4 py-2 hover:bg-[#9538E2] transition-all duration-300 hover:text-white border text-purple-500 `}
            >
              Sort by Price{" "}
            </button>
            <button
              className={`rounded-full  px-4 py-2 bg-gradient-to-bl  transition-all duration-300 hover:text-purple-500 border  text-white from-purple-500 to-purple-300 hover:from-white`}
            >
              Purches
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center py-5">
          {addCart.length <= 0
            ? "Could not add in Cart"
            : addCart.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="rounded-2xl p-3 bg-white w-full flex justify-between"
                  >
                    <div className="grid grid-cols-12 gap-3 items-center">
                      <div className="bg-gray-800 rounded-2xl col-span-3 h-full text-white">
                        <img
                          src={item.product_image}
                          className="object-cover h-full w-full self-center"
                          alt=""
                        />
                      </div>
                      <div className="col-span-9 flex flex-col gap-2">
                        <h1 className="text-black font-bold">
                          {item.product_title}
                        </h1>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                        <span className="text-black font-bold text-sm">
                          Price : ${item.price}
                        </span>
                      </div>
                    </div>
                    <div>
                      <button onClick={() => deleteCartData(item.product_id)}>
                        <RxCrossCircled className="text-3xl text-red-500" />
                      </button>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};
const WishList = ({ addfav, setAddCartElement, deletefavtData }) => {
  return (
    <>
      <div className="container mx-auto py-2">
        <div className="flex justify-between items-center">
          <div>Wishlist</div>
        </div>
        <div className="flex flex-col gap-2 items-center py-5">
          {addfav.length <= 0
            ? "No data add in whitelist"
            : addfav.map((produc, indx) => {
                return (
                  <div
                    key={indx}
                    className="rounded-2xl p-3 bg-white w-full flex justify-between"
                  >
                    <div className="grid grid-cols-12 gap-3 items-center">
                      <div className=" rounded-2xl col-span-3 h-full">
                        <img
                          src={produc.product_image}
                          alt=""
                          className="h-full w-full object-cover self-center"
                        />
                      </div>
                      <div className="col-span-9 flex flex-col gap-2">
                        <h1 className="text-black font-bold">
                          {produc.product_title}
                        </h1>
                        <p className="text-sm text-gray-500">
                          <span className="text-black">Description: </span>{" "}
                          Lorem
                          {produc.description}
                        </p>
                        <span className="text-black font-bold text-sm">
                          Price : ${produc.price}
                        </span>
                        <button
                          onClick={() => setAddCartElement(produc)}
                          className="rounded-full text-sm p-2 flex items-center gap-2 self-start px-4 text-white bg-purple-500"
                        >
                          Add to Cart <FaCartPlus />
                        </button>
                      </div>
                    </div>
                    <div>
                      <RxCrossCircled
                        onClick={() => deletefavtData(produc.product_id)}
                        className="text-red-500 text-3xl"
                      />
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
