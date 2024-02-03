import axios from "axios";

const VendorForm = ({ setAddVendor }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    var alertDom = document.getElementById("alert");
    const formData = new FormData(e.currentTarget);
    const newLog = Object.fromEntries(formData);
    try {
      // Create an Axios instance with the base URL
      const api = axios.create({
        baseURL: "http://localhost:5000/api/v1",
      });
      // Make a POST request using the created Axios instance
      await api.post("/vendor", newLog);
      // Close the modal and refresh the vendors list
      setAddVendor(false);
      alertDom.textContent = "Vendor added successfully";
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
    <section className="z-30 top-0 left-0 right-0 bottom-0 bg-black/50 fixed flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-md h-fit w-3/5 flex flex-col gap-4 px-8 pt-2 pb-8 relative"
      >
        <p
          className="absolute top-2 right-8 font-semibold hover:rotate-180 duration-300 text-lg cursor-pointer"
          onClick={() => setAddVendor(false)}
        >
          X
        </p>
        <header className="text-start font-semibold text-2xl">
          Add Vendor
        </header>
        <section className="flex flex-col items-start">
          <label className="font-semibold" htmlFor="vendor">
            Vendor Name:
          </label>
          <input
            name="vendor"
            required
            className="outline-none border px-2 border-gray-400 w-full"
            type="text"
            id="vendor"
          />
        </section>

        <section className="flex flex-col items-start">
          <label className="font-semibold" htmlFor="Address">
            Vendor Address:
          </label>
          <input
            required
            name="address"
            className="outline-none border px-2 border-gray-400 w-full"
            type="text"
            id="Address"
          />
        </section>
        <section className="flex flex-col items-start">
          <label className="font-semibold" htmlFor="phone">
            Vendor Phone:
          </label>
          <input
            name="phone"
            required
            className="outline-none border px-2 border-gray-400 w-full"
            type="text"
            id="phone"
          />
        </section>
        <button
          type="submit"
          className="bg-teal-600 whitespace-nowrap w-fit mx-auto px-4 py-2 rounded-md shadow-md hover:bg-blue-600 hover:scale-105 duration-300 drop-shadow-lg text-white"
        >
          Create vendor
        </button>
      </form>
    </section>
  );
};

export default VendorForm;
