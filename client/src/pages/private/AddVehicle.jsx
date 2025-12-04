import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";

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

    axios.post("http://localhost:3000/vehicles", formData).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="px-4 py-8 max-w-3xl mx-auto">
      <h2 className="text-3xl text-center font-bold mb-6">Add Vehicle</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <input
          type="text"
          name="vehicleName"
          placeholder="Vehicle Name"
          className="input input-bordered w-full"
        />

        <input
          type="text"
          name="owner"
          placeholder="Owner Name"
          className="input input-bordered w-full"
        />

        <select name="category" className="input input-bordered w-full">
          <option value="">Select Category</option>
          <option value="SUV">SUV</option>
          <option value="Electric">Electric</option>
          <option value="Sedan">Sedan</option>
          <option value="Van">Van</option>
        </select>

        <input
          type="number"
          name="pricePerDay"
          placeholder="Price Per Day"
          className="input input-bordered w-full"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          className="input input-bordered w-full"
        />

        <select name="availability" className="input input-bordered w-full">
          <option value="Available">Available</option>
          <option value="Booked">Booked</option>
        </select>

        <textarea
          name="description"
          placeholder="Description"
          className="input input-bordered h-24 w-full"
        />

        <input
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
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add Vehicle
        </button>
      </form>
    </div>
  );
};

export default AddVehicle;
