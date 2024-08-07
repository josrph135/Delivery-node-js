import axios from "axios";

const StaffForm = ({ setAddStaff }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    var alertDom = document.getElementById("alert");
    const formData = new FormData(e.currentTarget);
    const newLog = Object.fromEntries(formData);
    try {
      // Create an Axios instance with the base URL
      const api = axios.create({
        baseURL: "https://delivery-node-server.vercel.app/api/v1",
      });
      // Make a POST request using the created Axios instance
      await api.post("/staff", newLog);
      // Close the modal and refresh the vendors list
      setAddStaff(false);
      alertDom.textContent = "Staff added successfully";
    } catch (error) {
      // Handle errors if necessary
      console.error("Error creating vendor:", error);
    }
    setTimeout(() => {
      alertDom.classname = "hidden";
      alertDom.textContent = "";
    }, 2000);
  };
  return (
    <section className="z-30 top-0 left-0 right-0 bottom-0 bg-black/60 fixed flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-md h-fit md:w-1/2 sm:w-3/5 w-4/5 flex flex-col gap-4 px-8 pt-2 pb-8 relative"
      >
        <header className="absolute bg-teal-600/70 py-2 top-0 right-0 left-0">
          <h2 className="text-lg sm:text-xl font-semibold">Add Staff</h2>
          <p
            className="absolute top-2 right-8 font-semibold hover:rotate-180 duration-300 text-lg cursor-pointer"
            onClick={() => setAddStaff(false)}
          >
            X
          </p>
        </header>

        <section className="flex pt-12 flex-col items-start">
          <label className="font-semibold" htmlFor="staffName">
            Name:
          </label>
          <input
            name="name"
            className="outline-none border px-2 border-gray-400 w-full"
            type="text"
            id="staffName"
          />
        </section>

        <section className="flex flex-col items-start">
          <label className="font-semibold" htmlFor="Address">
            Address:
          </label>
          <input
            name="address"
            className="outline-none border px-2 border-gray-400 w-full"
            type="text"
            id="Address"
          />
        </section>

        <section className="flex flex-col items-start">
          <label className="font-semibold" htmlFor="bike">
            Bike details:
          </label>
          <input
            name="bike"
            className="outline-none border px-2 border-gray-400 w-full"
            type="text"
            id="bike"
          />
        </section>
        <section className="flex flex-col items-start">
          <label className="font-semibold" htmlFor="phone">
            Code:
          </label>
          <input
            name="code"
            className="outline-none border px-2 border-gray-400 w-full"
            type="number"
            id="phone"
          />
        </section>
        <section className="flex flex-col items-start">
          <label className="font-semibold" htmlFor="phone">
            Phone:
          </label>
          <input
            name="phone"
            className="outline-none border px-2 border-gray-400 w-full"
            type="number"
            id="phone"
          />
        </section>
        <section>
          <button className="bg-teal-600 whitespace-nowrap w-fit mx-auto px-4 py-2 rounded-md shadow-md hover:bg-blue-600 hover:scale-105 duration-300 drop-shadow-lg text-white">
            Add Staff
          </button>
        </section>
      </form>
    </section>
  );
};

export default StaffForm;
