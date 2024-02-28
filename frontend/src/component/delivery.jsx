import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DeliveryForm from "./form/DeliveryForm";
import { TiArrowBack } from "react-icons/ti";

const Delivery = () => {
  const [data, setData] = useState([]);
  const [openAdd, setAdd] = useState(false);

  const deleteHandle = async (_id) => {
    await axios.delete("http://localhost:5000/api/v1/delivery/" + _id);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/delivery")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [data]);

  return (
    <div className="flex flex-col gap-4">
      <header className="text-center font-semibold text-blue-500 text-2xl">
        Report Log
      </header>
      <section className="text-start flex flex-row items-center space-x-1">
        <Link
          className="bg-teal-500 whitespace-nowrap px-4 py-2 inline-block rounded-md shadow-md text-white hover:bg-blue-400 duration-300"
          to="/"
        >
          <span className="flex flex-row items-center">
            <TiArrowBack />
            Dashboard
          </span>
        </Link>
        <button
          onClick={() => setAdd(true)}
          className="bg-blue-400 hover:bg-teal-500 duration-300 whitespace-nowrap px-4 py-2 rounded-md shadow-md text-white"
        >
          Add New Delivery
        </button>
      </section>
      <table className="text-xs border overflow-x-auto border-black sm:text-sm">
        <thead>
          <tr className="bg-teal-500 text-white h-10 text-sm tracking-wider sm:text-base font-medium">
            <th className=" border border-black px-1">SN</th>
            <th className=" border border-black px-1">Date</th>
            <th className=" border border-black px-1">Rider</th>
            <th className=" border border-black px-1">Vendor</th>
            <th className=" border border-black px-1">Item-type</th>
            <th className=" border border-black px-1">Sender details</th>
            <th className=" border border-black px-1">Reciever details</th>
            <th className=" border border-black px-1">Mode of payment</th>
            <th className=" border border-black px-1">Amount</th>
            <th className=" border border-black px-1" colSpan={"2"}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((singleData, i) => {
            const {
              _id,
              createdAt,
              rider,
              item,
              sender,
              vendor,
              reciever,
              payment,
              amount,
            } = singleData;
            return (
              <tr className="hover:bg-slate-100 h-9" key={_id}>
                <td className=" border border-black px-1">{i + 1}</td>
                <td className=" border border-black px-1">{createdAt}</td>
                <td className=" border border-black px-1">{rider}</td>
                <td className=" border border-black px-1">{vendor}</td>
                <td className=" border border-black px-1">{item}</td>
                <td className=" border border-black px-1">{sender}</td>
                <td className=" border border-black px-1">{reciever}</td>
                <td className=" border border-black px-1">{payment}</td>
                <td className=" border border-black px-1">{amount}</td>
                <td className=" border border-black px-1">
                  <Link
                    to={`/updateform/${_id}`}
                    className="bg-yellow-600 whitespace-nowrap px-2 py-1 rounded-md shadow-md text-white"
                  >
                    Edit
                  </Link>
                </td>
                <td className=" border border-black px-1">
                  <button
                    onClick={() => deleteHandle(_id)}
                    className="bg-red-500 whitespace-nowrap px-2 py-1 rounded-md shadow-md text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {openAdd && <DeliveryForm setAdd={setAdd} />}
    </div>
  );
};

export default Delivery;
