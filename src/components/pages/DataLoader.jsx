import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DataLoader = ({ navUrl, useData }) => {
  const navigate = useNavigate();
  const [userShowingData, setShowingData] = useState([]);
  useEffect(() => {
    if (navUrl == "/") {
      setShowingData(useData);
    } else {
      const filterData = useData.filter((item) => navUrl === item.category);
      setShowingData(filterData);
    }
  }, [navigate]);

  return (
    <>
      {userShowingData.length < 1
        ? "no data found"
        : userShowingData.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-md p-4 flex flex-col gap-4 "
              >
                <div className="rounded-xl overflow-hidden bg-gray-400 w-full h-48">
                  <img
                    src={item.product_image}
                    className="object-cover h-full w-full self-center"
                    alt=""
                  />
                </div>
                <h1 className="text-black font-bold">{item.product_title}</h1>
                <p className="text-gray-500 grow">{item.description}</p>
                <button
                  onClick={() =>
                    navigate("details", {
                      state: item,
                    })
                  }
                  className={
                    "rounded-full border text-purple-500 p-3 py-2 self-start transition-all hover:bg-purple-500 duration-150 hover:text-white"
                  }
                >
                  View Details
                </button>
              </div>
            );
          })}
      {}
    </>
  );
};

export default DataLoader;
