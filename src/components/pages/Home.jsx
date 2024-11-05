import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = ({ m_v_pages }) => {
  const [Data, setData] = useState([]);
  let [categorys, setCategorys] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get("./data.json");
      const data = res.data.gadgets;
      setData(data);
      const categoryss = await data.map((item) => {
        return item.category;
      });

      setCategorys([...new Set(categoryss)]);
    })();
  }, []);

  // console.log(Data.map(async(item)=> item.category));

  //   console.log(categorys);

  return (
    <div className="bg-gray-100">
      <div
        className={`bg-[#9538E2] ${m_v_pages} rounded-bl-2xl rounded-br-2xl py-10 mb-[300px] `}
      >
        <div className="container mx-auto text-white text-center flex flex-col gap-4 items-center justify-center relative pb-[150px]">
          <h1 className="text-4xl text-center font-bold">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-sm w-7/12 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <NavLink
            to={"/shopnow"}
            className={
              " bg-white rounded-full text-black px-4 py-2 hover:bg-[#9538E2] transition-all duration-300 hover:text-white border"
            }
          >
            Shop Now
          </NavLink>

          <img
            src="./banner.jpg"
            className="absolute -bottom-[150px] md:-bottom-[220px] rounded-xl  outline outline-offset-4 w-[300px] md:w-[500px]"
            alt=""
          />
        </div>
      </div>

      <div className="container mx-auto flex flex-col gap-3 items-center justify-center pb-10">
        <h1 className="text-4xl text-center font-bold mb-5">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="grid md:grid-cols-12 gap-3 w-full">
          <div className="md:col-span-3 rounded-xl bg-white p-3 flex gap-2 flex-col self-start">
          <span  className="p-2 rounded-2xl px-5 bg-gray-200">
                  All Product
                </span>
            {categorys.map((item, index) => {
              return (
                <span key={index} className="p-2 rounded-2xl px-5 bg-gray-200">
                  {item}
                </span>
              );
            })}
          </div>
          {/* item boxes */}
          <div className="md:col-span-9 rounded-xl  p-3 py-0 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {Data.map((item, index) => {
              return (
                <div key={index} className="bg-white rounded-md p-4 flex flex-col gap-4 ">
                  <div className="rounded-xl overflow-hidden bg-gray-400 w-full h-48">
                    <img src={item.product_image} className="object-cover h-full w-full self-center" alt="" />
                  </div>
                  <h1 className="text-black font-bold">{item.product_title}</h1>
                  <p className="text-gray-500 ">
                    {item.description}
                  </p>
                  <NavLink
                    to="details"
                    className={
                      "rounded-full border text-purple-500 p-3 py-2 self-start transition-all hover:bg-purple-500 duration-150 hover:text-white"
                    }
                  >
                    View Details
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
