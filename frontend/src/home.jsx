import { useState } from "react";
import { Link } from "react-router-dom";
import VendorForm from "./form/VendorForm";
import StaffForm from "./form/StaffForm";
const Home = () => {
  const [AddVendor, setAddVendor] = useState(false);
  const [AddStaff, setAddStaff] = useState(false);
  return (
    <div>
      <main className="flex flex-col items-start gap-4 duration-300 px-2 mx-0 sm:px-8 text-sm md:text-base md:px-12 bg-slate-200 rounded-md py-16 min-w-[300px]">
        <p
          className="text-green-500 capitalize text-[14px] text-center"
          id="alert"
        ></p>
        <header className="md:text-2xl text-xl font-semibold">Dashboard</header>
        <section className="flex flex-row gap-2 flex-wrap">
          <button
            className="bg-blue-400 whitespace-nowrap px-2 sm:px-4 sm:py-2 py-1 rounded-md shadow-md text-white"
            onClick={() => setAddVendor(true)}
          >
            Add Vendor
          </button>
          {AddVendor && <VendorForm setAddVendor={setAddVendor} />}
          <button
            className="bg-blue-400 whitespace-nowrap px-2 sm:px-4 sm:py-2 py-1 rounded-md shadow-md text-white"
            onClick={() => setAddStaff(true)}
          >
            Add Staff
          </button>
          {AddStaff && <StaffForm setAddStaff={setAddStaff} />}
          <Link
            className="bg-teal-600 whitespace-normal sm:whitespace-nowrap px-2 sm:px-4 sm:py-2 py-1 rounded-md shadow-md text-white"
            to="/delivery"
          >
            Add and Manage Delivery Orders
          </Link>
        </section>
      </main>
      <p className="text-[14px] pt-4">Copyright &copy; 2024 Jade</p>
    </div>
  );
};

export default Home;
