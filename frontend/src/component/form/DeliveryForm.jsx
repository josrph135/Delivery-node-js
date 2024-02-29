import axios from "axios";
import { useEffect, useState } from "react";

const DeliveryForm = ({ setAdd }) => {
  const [rider, setRider] = useState([]);
  const [vendor, setVendor] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/vendor")
      .then((res) => setVendor(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/staff")
      .then((res) => setRider(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newLog = Object.fromEntries(formData);
    try {
      // Create an Axios instance with the base URL
      const api = axios.create({
        baseURL: "http://localhost:5000/api/v1",
      });
      // Make a POST request using the created Axios instance
      await api.post("/delivery", newLog);
      // Close the modal and refresh the vendors list
      setAdd(false);
    } catch (error) {
      // Handle errors if necessary
      console.error("Error creating vendor:", error);
    }
  };
  return (
    <section className="z-30 top-0 left-0 right-0 bottom-0 bg-black/60 fixed flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-md overflow-y-auto h-[85%] md:w-1/2 sm:w-3/5 w-4/5 flex flex-col gap-4 p-8 relative"
      >
        <header className="absolute bg-teal-600/70 py-2 top-0 right-0 left-0">
          <h2 className="text-lg sm:text-xl font-semibold">Add New Delivery</h2>
          <p
            onClick={() => setAdd(false)}
            className="absolute top-2 right-8 font-semibold hover:rotate-180 duration-300 cursor-pointer"
          >
            X
          </p>
        </header>
        <section className="flex flex-col items-start pt-4">
          <label className="font-semibold" htmlFor="date">
            Date
          </label>
          <input
            name="createdAt"
            className="outline-none border px-2 border-gray-400 w-full"
            type="date"
            id="date"
            required
          />
        </section>
        <section className="flex flex-col items-start">
          <label className="font-semibold" htmlFor="rider">
            Rider
          </label>
          <select
            name="rider"
            className="outline-none border px-2 border-gray-400 w-full"
            id="rider"
          >
            {rider.map((riders, i) => {
              return (
                <option key={i} value={riders.name}>
                  {riders.name}
                </option>
              );
            })}
          </select>
        </section>
        <section className="flex flex-col items-start">
          <label className="font-semibold" htmlFor="vendor">
            Vendor
          </label>
          <select
            name="vendor"
            className="outline-none border px-2 border-gray-400 w-full"
            id="vendor"
          >
            {vendor.map((vend, i) => {
              return (
                <option key={i} value={vend.vendor}>
                  {vend.vendor}
                </option>
              );
            })}
          </select>
        </section>
        <section className="flex flex-col items-start">
          <label className="font-semibold" htmlFor="item">
            Item-type
          </label>
          <input
            name="item"
            className="outline-none border px-2 border-gray-400 w-full"
            type="text"
            id="item"
          />
        </section>
        <section className="flex flex-col items-start">
          <label className="font-semibold" htmlFor="recieverAddress">
            Reciever Delivery Address
          </label>
          <input
            name="reciever"
            className="outline-none border px-2 border-gray-400 w-full"
            type="text"
            id="recieverAddress"
          />
        </section>
        <section className="flex flex-col items-start">
          <label className="font-semibold" htmlFor="sender">
            Sender
          </label>
          <input
            name="sender"
            className="outline-none border px-2 border-gray-400 w-full"
            type="text"
            id="sender"
          />
        </section>
        <section className="flex flex-col items-start">
          <label className="font-semibold" htmlFor="payment">
            Mode of Payment
          </label>
          <select
            name="payment"
            className="outline-none border px-2 border-gray-400 w-full"
            id="payment"
          >
            <option value="cash">Cash</option>
            <option value="cheque">Cheque</option>
          </select>
        </section>
        <section className="flex flex-col items-start">
          <label className="font-semibold" htmlFor="amount">
            Amount
          </label>
          <input
            name="amount"
            className="outline-none border px-2 border-gray-400 w-full"
            type="number"
            id="number"
          />
        </section>
        <button className="bg-blue-400 whitespace-nowrap px-4 py-2 rounded-md shadow-md text-white">
          Add new order
        </button>
      </form>
    </section>
  );
};

export default DeliveryForm;
