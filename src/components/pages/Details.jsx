const Details = () => {
  return (
    <div>
      <div className="bg-[#9538E2] text-white">
        <div className="container mx-auto text-center relative flex flex-col gap-3 justify-center items-center pb-[230px] mb-[200px] pt-10">
          <h1 className="font-bold text-2xl">Produc Details</h1>
          <p className="text-gray-100 text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="absolute rounded-2xl p-4 grid grid-cols-12 gap-6 bg-white -bottom-2/4 ">
            <div className="bg-gray-400 col-span-4 rounded-xl"></div>
            <div className=" text-black col-span-8 flex flex-col gap-1 text-start">
              <h1 className=" font-bold">Samsung Galaxy S23 Ultra</h1>
              <h1 className=" font-bold">Price : $64875</h1>
              <span className="text-green-500 border rounded-full p-3 py-1 text-sm self-start ">
                In Stock
              </span>
              <p className="text-gray-400">
                Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
                display.
              </p>
              <span className="text-black font-bold">Specifications:</span>

              <ol type="a" className="text-gray-300 ">
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
              </ol>
              <span className="text-black font-bold">Specifications:</span>

              <div className="flex gap-3">
                <button className="rounded-full text-sm p-2 text-white bg-purple-500">
                  Add to Card
                </button>
                <button className="rounded-full border p-2 text-sm text-gray-500 ">
                  {" "}
                  {"<>"}{" "}
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
