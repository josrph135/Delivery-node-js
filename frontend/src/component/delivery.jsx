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
      <table className="text-sm">
        <thead>
          <tr>
            <th>SN</th>
            <th>Date</th>
            <th>Rider</th>
            <th>Vendor</th>
            <th>Item-type</th>
            <th>Sender details</th>
            <th>Reciever details</th>
            <th>Mode of payment</th>
            <th>Amount</th>
            <th className="">Action</th>
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
              <tr key={_id}>
                <td>{i + 1}</td>
                <td>{createdAt}</td>
                <td>{rider}</td>
                <td>{vendor}</td>
                <td>{item}</td>
                <td>{sender}</td>
                <td>{reciever}</td>
                <td>{payment}</td>
                <td>{amount}</td>
                <td>
                  <Link
                    to={`/updateform/${_id}`}
                    className="bg-teal-500 whitespace-nowrap px-2 py-1 rounded-md shadow-md text-white"
                  >
                    Edit
                  </Link>
                </td>
                <td>
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
