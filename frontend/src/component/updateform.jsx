import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Updateform = () => {
  const [rider, setRider] = useState([]);
  const [vendor, setVendor] = useState([]);
  const { id } = useParams();
  const [log, setLog] = useState({
    id: id,
    amount: "",
    createdAt: "",
    item: "",
    payment: "",
    reciever: "",
    rider: "",
    sender: "",
    vendor: "",
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/delivery/" + id).then((res) => {
      const data = res.data;
      setLog({ ...log, ...data });
    });
    axios
      .get("http://localhost:5000/api/v1/staff")
      .then((res) => setRider(res.data))
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/api/v1/vendor")
      .then((res) => setVendor(res.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:5000/api/v1/delivery/` + id, log)
      .catch((err) => console.log(err));
    navigate("/delivery");
  };
  return (
    <section className="z-30 top-0 left-0 right-0 bottom-0 bg-black/50 fixed flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-md overflow-y-auto h-[85%] md:w-1/2 sm:w-3/5 w-4/5 flex flex-col gap-4 p-8 relative"
      >
        <header className="absolute bg-teal-600/70 py-2 top-0 right-0 left-0">
          <h2 className="text-lg sm:text-xl font-semibold">Update Log</h2>
          <Link
            to={"/delivery"}
            className="absolute top-2 right-8 font-semibold hover:rotate-180 duration-300 cursor-pointer"
          >
            X
          </Link>
        </header>

        <section className="flex pt-4 flex-col items-start">
          <label className="font-semibold" htmlFor="date">
            Date
          </label>
          <input
            className="outline-none border px-2 border-gray-400 w-full"
            type="date"
            id="date"
            required
            value={log.createdAt}
            onChange={(e) => setLog({ ...log, createdAt: e.target.value })}
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
            value={log.rider}
            onChange={(e) => setLog({ ...log, rider: e.target.value })}
          >
            {rider.map((delLog) => {
              return <option key={delLog._id}>{delLog.name}</option>;
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
            onChange={(e) => setLog({ ...log, vendor: e.target.value })}
          >
            {vendor.map((delLog) => {
              return <option key={delLog._id}>{delLog.vendor}</option>;
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
            value={log.item}
            onChange={(e) => setLog({ ...log, item: e.target.value })}
          />
        </section>
        <section className="flex flex-col items-start">
          <label className="font-semibold" htmlFor="recieverAddress">
            Reciever Delivery Address
          </label>
          <input
            value={log.reciever}
            onChange={(e) => setLog({ ...log, reciever: e.target.value })}
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
            onChange={(e) => setLog({ ...log, sender: e.target.value })}
            className="outline-none border px-2 border-gray-400 w-full"
            type="text"
            id="sender"
            value={log.sender}
          />
        </section>
        <section className="flex flex-col items-start">
          <label className="font-semibold" htmlFor="payment">
            Mode of Payment
          </label>
          <select
            onChange={(e) => setLog({ ...log, payment: e.target.value })}
            name="payment"
            className="outline-none border px-2 border-gray-400 w-full"
            id="payment"
            value={log.payment}
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
            onChange={(e) => setLog({ ...log, amount: e.target.value })}
            value={log.amount}
            name="amount"
            className="outline-none border px-2 border-gray-400 w-full"
            type="number"
            id="number"
          />
        </section>
        <button className="bg-blue-400 whitespace-nowrap px-4 py-2 rounded-md shadow-md text-white">
          Update Log
        </button>
      </form>
    </section>
  );
};

export default Updateform;
