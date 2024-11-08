import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
const Home = ({ m_v_pages ,collectCategory,catergoryData}) => {
  const navigate = useNavigate();
  const [Data, setData] = useState([]);
  const [useData, setUserData] = useState([]);


  useEffect(() => {
    (async () => {
      const res = await axios.get("./data.json");
      const data = res.data.gadgets;
      setData(data);
      setUserData(data);
 
   
    })();
  }, []);

  const Filter_Category = async (e) => {
    const categoryss = e.target.innerHTML;
    const main_father = e.target.parentElement;
    Array.from(main_father.children).forEach((item) => {
      if (item !== e.target) {
        item.style.backgroundColor = "lightgray";
      }
    });
    e.target.style.backgroundColor = "lightblue";
    const filteredData = Data.filter((item) => item.category === categoryss);
    categoryss == "All Product" ? setUserData(Data) : setUserData(filteredData);
    collectCategory(categoryss)
  };

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
          <a
            href="#shopNow"
            className={
              " bg-white rounded-full text-black px-4 py-2 hover:bg-[#9538E2] transition-all duration-300 hover:text-white border"
            }
          >
            Shop Now
          </a>

          <img
            src="./banner.jpg"
            className="absolute -bottom-[150px] md:-bottom-[220px] rounded-xl  outline outline-offset-4 w-[300px] md:w-[500px]"
            alt=""
          />
        </div>
      </div>

      <div className="container mx-auto flex flex-col gap-3 items-center justify-center pb-10">
        <h1 className="text-4xl text-center font-bold mb-5" id="shopNow">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="grid md:grid-cols-12 gap-3 w-full">
          <div className="md:col-span-3 rounded-xl bg-white p-3 flex gap-2 flex-col self-start">
            <span
              onClick={Filter_Category}
              className="p-2 rounded-2xl  px-5 bg-blue-200"
            >
              All Product
            </span>
            {catergoryData.map((item, index) => {
              return (
                <button 
                  onClick={Filter_Category}
                  key={index}
                  className="p-2 text-start rounded-2xl px-5 bg-gray-300"
                >
                  {item}
                </button>
              );
            })}
          </div>
          {/* item boxes */}
          <div className="md:col-span-9 rounded-xl  p-3 py-0 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
