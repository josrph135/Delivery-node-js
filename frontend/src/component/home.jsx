import { useState } from "react";
import { Link } from "react-router-dom";
import VendorForm from "./form/VendorForm";
import StaffForm from "./form/StaffForm";
const Home = () => {
  const [AddVendor, setAddVendor] = useState(false);
  const [AddStaff, setAddStaff] = useState(false);
  return (
    <div>
      <main className="flex flex-col items-start gap-4 px-12 bg-slate-200 rounded-md py-16">
        <p className="alert"></p>
        <header className="text-2xl font-semibold">Dashboard</header>
        <section className="flex flex-row gap-2 flex-wrap">
          <button
            className="bg-blue-400 whitespace-nowrap px-4 py-2 rounded-md shadow-md text-white"
            onClick={() => setAddVendor(true)}
          >
            Add Vendor
          </button>
          {AddVendor && <VendorForm setAddVendor={setAddVendor} />}
          <button
            className="bg-blue-400 whitespace-nowrap px-4 py-2 rounded-md shadow-md text-white"
            onClick={() => setAddStaff(true)}
          >
            Add Staff
          </button>
          {AddStaff && <StaffForm setAddStaff={setAddStaff} />}
          <Link
            className="bg-teal-600 whitespace-nowrap px-4 py-2 rounded-md shadow-md text-white"
            to="/delivery"
          >
            Add and Manage Delivery Orders
          </Link>
        </section>
      </main>
      <p>Copyright &copy; 2024 Molieve</p>
    </div>
  );
};

export default Home;
