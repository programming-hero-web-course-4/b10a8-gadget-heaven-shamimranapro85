import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container mx-auto">
      <div className="py-10 flex justify-center items-center">
        <div className="rounded-3xl text-center bg-gray-100 p-5 flex flex-col gap-2">
          <h1 className="text-black text-4xl mb-5 font-bold text-center">
            Contact
          </h1>
          <p className="text-gray-600 w-8/12 mx-auto text-sm">
            If you have some question for our site related then you can contact
            to us{" "}
          </p>
          <p className="text-red-400 text-sm w-10/12 mx-auto">
            If your payment not okay then immediately contact to us with your
            proving document
          </p>
          <div className="w-full flex flex-col  gap-3 mb-10 mt-3">
            <input
              type="text"
              className="input input-bordered w-full "
              placeholder="Enter you valid email"
            />
            <input
              type="text"
              className="input input-bordered w-full "
              placeholder="Enter contact Number"
            />
            <input
              type="text"
              className="input input-bordered w-full "
              placeholder="write your problems details"
            />
          </div>
          <NavLink to={"/"} className="btn bg-purple-500">
            Submit
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Contact;
