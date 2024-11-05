const Statistics = () => {
  return (
    <div className="bg-gray-100">
      <div className={`bg-[#9538E2]`}>
        <div className="container mx-auto text-white text-center flex flex-col gap-4 items-center justify-center py-10">
          <h1 className="text-4xl text-center font-bold">Statistics</h1>
          <p className="text-sm w-7/12 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <Chart />
    </div>
  );
};

const Chart = () => {
  return (
    <>
      <div className="container mx-auto py-2">
        <div className="flex justify-between items-center">
          <div>Statistics</div>
        </div>
        <div className="p-3 bg-white w-full rounded-2xl my-5">s</div>
      </div>
    </>
  );
};

export default Statistics;
