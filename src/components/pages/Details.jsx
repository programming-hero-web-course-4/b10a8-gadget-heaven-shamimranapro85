import { useLocation } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import ReactStars from "react-rating-stars-component";
const Details = ({ setAddfavElement, setAddCartElement }) => {
  const location = useLocation();
  const item = location.state || {};
  console.log(item);

  return (
    <div>
      <div className="bg-[#9538E2] text-white">
        <div className="container mx-auto text-center relative flex flex-col gap-3 justify-center items-center mb-[250px] pb-[350px]  sm:pb-[230px] sm:mb-[200px] pt-10">
          <h1 className="font-bold text-2xl">Produc Details</h1>
          <p className="text-gray-100 text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="absolute rounded-2xl p-4 grid scale-[0.7] sm:scale-1 sm:grid-cols-12 gap-6 bg-white -bottom-[300px]  sm:-bottom-[200px] ">
            <div className="bg-gray-400 flex items-center overflow-hidden col-span-4 rounded-xl">
              <img
                src={item.product_image}
                className="w-full  self-center object-cover"
                alt=""
              />
            </div>
            <div className=" text-black col-span-8 flex flex-col gap-1 text-start">
              <h1 className=" font-bold">{item.product_title}</h1>
              <h1 className=" font-bold">Price : ${item.price}</h1>
              <span
                className={`${
                  item.availability ? "text-green-500" : "text-red-500"
                } border rounded-full p-3 py-1 text-sm self-start `}
              >
                {item.availability ? "In Stock" : "Out of Stock"}
              </span>
              <p className="text-gray-400">{item.description}</p>
              <span className="text-black font-bold">Specifications:</span>

              <ol type="a" className="text-gray-300 ">
                {Object.entries(item.Specification).map(
                  ([key, value], index) => {
                    return (
                      <li key={index}>
                        {key} : {value}
                      </li>
                    );
                  }
                )}
              </ol>
              <span className="text-black font-bold">Rating:</span>
              <div
                style={{ pointerEvents: null }}
                className="flex py-3 justify-start items-center gap-3"
              >
                <ReactStars
                  count={5}
                  value={item.rating}
                  size={25}
                  isHalf={true}
                  edit={false}
                />
                <span className="p-2 rounded-full bg-gray-100 px-4">
                  {item.rating}
                </span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setAddCartElement(item)}
                  className="rounded-full text-sm p-2 flex items-center gap-2 px-4 text-white bg-purple-500"
                >
                  Add to Cart <FaCartPlus />
                </button>
                <button
                  onClick={() => setAddfavElement(item)}
                  className="rounded-full border p-2 text-sm text-gray-500 "
                >
                  <CiHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
