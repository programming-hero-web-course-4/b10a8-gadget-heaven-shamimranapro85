import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
const Dashboard = () => {
  const [cart, setCart] = useState("Cart");
  const handleActive = (e) => {
    console.log(e.target.innerText == "Cart");

    e.target.innerText == "Cart" ? setCart(`Cart`) : setCart("");
  };

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

      {cart == "Cart" ? <Cart /> : <WishList />}
    </div>
  );
};

const Cart = () => {
  return (
    <>
      <div className="container mx-auto py-2">
        <div className="flex justify-between items-center">
          <div>Cart</div>
          <div className="flex gap-2 items-center">
            <h1 className="text-black font-bold">Total Cost: 999.99</h1>
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
          <div className="rounded-2xl p-3 bg-white w-full flex justify-between">
            <div className="grid grid-cols-12 gap-3 items-center">
              <div className="bg-gray-800 rounded-2xl col-span-3 h-full">s</div>
              <div className="col-span-9 flex flex-col gap-2">
                <h1 className="text-black font-bold">Samsung s9 ultra pro </h1>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </p>
                <span className="text-black font-bold text-sm">
                  Price : $ 4587
                </span>
              </div>
            </div>
            <RxCrossCircled className="text-red-500" />
          </div>
        </div>
      </div>
    </>
  );
};
const WishList = () => {
  return (
    <>
      <div className="container mx-auto py-2">
        <div className="flex justify-between items-center">
          <div>Wishlist</div>
        </div>
        <div className="flex flex-col gap-2 items-center py-5">
          <div className="rounded-2xl p-3 bg-white w-full flex justify-between">
            <div className="grid grid-cols-12 gap-3 items-center">
              <div className="bg-gray-800 rounded-2xl col-span-3 h-full">s</div>
              <div className="col-span-9 flex flex-col gap-2">
                <h1 className="text-black font-bold">Samsung s9 ultra pro </h1>
                <p className="text-sm text-gray-500">
                  <span className="text-black">Description: </span> Lorem ipsum dolor sit, amet consectetur adipisicing.
                </p>
                <span className="text-black font-bold text-sm">
                  Price : $ 4587
                </span>
              </div>
            </div>
            <RxCrossCircled className="text-red-500" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
