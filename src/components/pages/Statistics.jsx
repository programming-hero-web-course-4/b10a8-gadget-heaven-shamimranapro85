import axios from "axios";
import React, {
  PureComponent,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const [userAllData, setUserAllData] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await axios.get("./data.json");
      console.log(data.data.gadgets);
      setUserAllData(data.data.gadgets);
    })();
  }, []);
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
      <Chart userAllData={userAllData} />
    </div>
  );
};

const Chart = ({ userAllData }) => {
  console.log("paichi data: ", userAllData);

  return (
    <>
      <div className="container mx-auto py-2">
        <div className="flex justify-between items-center">
          <div>Statistics</div>
        </div>
        <div className="p-3 relative overflow-hidden flex items-center justify-center bg-white w-full rounded-2xl my-5">
        
            <BarChart
             
              width={700}
              height={300}
              data={userAllData}
              style={{
                width:"100%",
                height:''
              }}
              margin={{
                top: 5,
                right: 40,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={"product_title"} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
              dataKey="price"
              fill="#be00e8"
              activeBar={<Rectangle fill="purple" stroke="purple" />}
            />
              <Bar
                dataKey="rating"
                fill="#e4e800"
                activeBar={<Rectangle fill="purple" stroke="purple" />}
              />
            </BarChart>
    
        </div>
      </div>
    </>
  );
};

export default Statistics;
