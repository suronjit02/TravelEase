import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateVehicle = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [vehicle, setVehicle] = useState();
  const [category, setCategory] = useState(vehicle?.category);
  const [availability, setAvailability] = useState(vehicle?.availability);
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    axios
      .get(`https://travel-ease-pied-six.vercel.app/vehicles/${id}`)
      .then((res) => {
        setVehicle(res.data);
        setCategory(res.data.category);
      });
  }, [id]);

  console.log(vehicle);

  const handleUpdate = (e) => {
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

      createdAt,
    };

    axios
      .put(`https://travel-ease-pied-six.vercel.app/update/${id}`, formData)
      .then((res) => {
        console.log(res.data);
        toast.success("Update your vehicle successfully!");
        navigate("/my-vehicles");
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(formData);
  };

  return (
    <div className="p-2 sm:p-0">
      <div className="max-w-3xl mx-auto bg-white/30 backdrop-blur-md border border-white/30 p-5 sm:p-15 rounded-lg my-15">
        <h3 className="text-center mb-8 text-2xl font-semibold">
          Update Your Vehicle Data
        </h3>
        <form onSubmit={handleUpdate} className="flex flex-col gap-4 w-full">
          <input
            required
            defaultValue={vehicle?.vehicleName}
            type="text"
            name="vehicleName"
            placeholder="Vehicle Name"
            className="input input-bordered w-full"
          />

          <input
            required
            defaultValue={vehicle?.owner}
            type="text"
            name="owner"
            placeholder="Owner Name"
            className="input input-bordered w-full"
          />

          <select
            required
            name="category"
            className="input input-bordered w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="SUV">SUV</option>
            <option value="Electric">Electric</option>
            <option value="Sedan">Sedan</option>
            <option value="Van">Van</option>
          </select>

          <input
            required
            defaultValue={vehicle?.pricePerDay}
            type="number"
            name="pricePerDay"
            placeholder="Price Per Day"
            className="input input-bordered w-full"
          />

          <input
            required
            defaultValue={vehicle?.location}
            type="text"
            name="location"
            placeholder="Location"
            className="input input-bordered w-full"
          />

          <select
            required
            name="availability"
            className="input input-bordered w-full"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          >
            <option value="Available">Available</option>
            <option value="Booked">Booked</option>
          </select>

          <textarea
            required
            defaultValue={vehicle?.description}
            name="description"
            placeholder="Description"
            className="input input-bordered h-24 w-full"
          />

          <input
            required
            defaultValue={vehicle?.coverImage}
            type="text"
            name="coverImage"
            placeholder="Cover Image URL"
            className="input input-bordered w-full"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateVehicle;
