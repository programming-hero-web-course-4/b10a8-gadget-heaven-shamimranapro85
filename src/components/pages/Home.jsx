import { NavLink } from "react-router-dom";

const Home = ({ m_v_pages }) => {


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

            <img src="./banner.jpg" className="absolute -bottom-[220px] rounded-xl  outline outline-offset-4 w-[500px]" alt="" />
        </div>
      </div>

      <div className="container mx-auto flex flex-col gap-3 items-center justify-center pb-10">
            <h1 className="text-4xl text-center font-bold">Explore Cutting-Edge Gadgets</h1>
            <div className="grid md:grid-cols-12 gap-3 w-full">
                <div className="md:col-span-3 rounded-xl bg-white p-3 flex gap-2 flex-col self-start">
                    <span className="p-2 rounded-2xl px-5 bg-gray-200">All Product</span>
                    <span className="p-2 rounded-2xl px-5 bg-gray-200">All Product</span>
                    <span className="p-2 rounded-2xl px-5 bg-gray-200">All Product</span>
                </div>
                {/* item boxes */}
                <div className="md:col-span-9 rounded-xl  p-3 py-0 grid grid-cols-3 gap-3">
                    <div className="bg-white rounded-md p-4 flex flex-col gap-4 ">
                        <div className="rounded-xl bg-gray-400 w-full h-48"></div>
                        <h1 className="text-black font-bold">i phone</h1>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <NavLink to="details" className={"rounded-full border text-purple-500 p-3 py-2 self-start transition-all hover:bg-purple-500 duration-150 hover:text-white"}>View Details</NavLink>
                    </div>
                    <div className="bg-white rounded-md p-4 flex flex-col gap-4 ">
                        <div className="rounded-xl bg-gray-400 w-full h-48"></div>
                        <h1 className="text-black font-bold">i phone</h1>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <NavLink to="details" className={"rounded-full border text-purple-500 p-3 py-2 self-start transition-all hover:bg-purple-500 duration-150 hover:text-white"}>View Details</NavLink>
                    </div>
                    <div className="bg-white rounded-md p-4 flex flex-col gap-4 ">
                        <div className="rounded-xl bg-gray-400 w-full h-48"></div>
                        <h1 className="text-black font-bold">i phone</h1>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <NavLink to="details" className={"rounded-full border text-purple-500 p-3 py-2 self-start transition-all hover:bg-purple-500 duration-150 hover:text-white"}>View Details</NavLink>
                    </div>
                    <div className="bg-white rounded-md p-4 flex flex-col gap-4 ">
                        <div className="rounded-xl bg-gray-400 w-full h-48"></div>
                        <h1 className="text-black font-bold">i phone</h1>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <NavLink to="details" className={"rounded-full border text-purple-500 p-3 py-2 self-start transition-all hover:bg-purple-500 duration-150 hover:text-white"}>View Details</NavLink>
                    </div>
                    <div className="bg-white rounded-md p-4 flex flex-col gap-4 ">
                        <div className="rounded-xl bg-gray-400 w-full h-48"></div>
                        <h1 className="text-black font-bold">i phone</h1>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <NavLink to="details" className={"rounded-full border text-purple-500 p-3 py-2 self-start transition-all hover:bg-purple-500 duration-150 hover:text-white"}>View Details</NavLink>
                    </div>
                </div>
            </div>
      </div>
    </div> 
  );
};

export default Home;
