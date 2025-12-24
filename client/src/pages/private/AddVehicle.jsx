import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const AddVehicle = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const vehicleName = form.vehicleName.value;
    const owner = form.owner.value;
    const category = form.category.value;
    const pricePerDay = parseInt(form.pricePerDay.value);
    const location = form.location.value;
    const availability = form.availability.value;
    const description = form.description.value;
    const coverImage = form.coverImage.value;
    const userEmail = form.userEmail.value;
    const createdAt = new Date().toISOString();

    const formData = {
      vehicleName,
      owner,
      category,
      pricePerDay,
      location,
      availability,
      description,
      coverImage,
      userEmail,
      createdAt,
    };

    console.log(formData);

    axios
      .post("https://travel-ease-pied-six.vercel.app/vehicles", formData)
      .then((res) => {
        console.log(res);
        toast.success("Vehicle Added Successfully!");
        form.reset();
      });
  };

  return (
    <div className="px-4 py-8 max-w-3xl mx-auto">
      <div className="bg-white/30 backdrop-blur-md border border-white/30 p-5 sm:p-15 rounded-lg">
        <h2 className="text-3xl text-center font-bold mb-6">
          Add Your Vehicle
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <input
            required
            type="text"
            name="vehicleName"
            placeholder="Vehicle Name"
            className="input input-bordered w-full"
          />

          <input
            required
            type="text"
            name="owner"
            placeholder="Owner Name"
            className="input input-bordered w-full"
          />

          <select
            required
            name="category"
            className="input input-bordered w-full"
          >
            <option value="">Select Category</option>
            <option value="SUV">SUV</option>
            <option value="Electric">Electric</option>
            <option value="Sedan">Sedan</option>
            <option value="Van">Van</option>
          </select>

          <input
            required
            type="number"
            name="pricePerDay"
            placeholder="Price Per Day"
            className="input input-bordered w-full"
          />

          <input
            required
            type="text"
            name="location"
            placeholder="Location"
            className="input input-bordered w-full"
          />

          <select
            required
            name="availability"
            className="input input-bordered w-full"
          >
            <option value="Available">Available</option>
            <option value="Booked">Booked</option>
          </select>

          <textarea
            required
            name="description"
            placeholder="Description"
            className="input input-bordered h-24 w-full "
            style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
          />

          <input
            required
            type="text"
            name="coverImage"
            placeholder="Cover Image URL"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            name="userEmail"
            placeholder="Email"
            value={user.email}
            readOnly
            className="input input-bordered w-full"
          />

          <button
            type="submit"
            className="btn border-none bg-sky-600 text-white hover:bg-sky-700"
          >
            Add Vehicle
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVehicle;
