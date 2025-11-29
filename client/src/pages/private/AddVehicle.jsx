import { useState } from "react";

const AddVehicle = () => {
  const [formData, setFormData] = useState({
    vehicleName: "",
    owner: "",
    category: "",
    pricePerDay: "",
    location: "",
    availability: "Available",
    description: "",
    coverImage: "",
    userEmail: "user@example.com",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!formData.vehicleName || !formData.owner || !formData.category) {
      alert("Please fill all required fields!");
      return;
    }

    
    setSuccess(`Vehicle "${formData.vehicleName}" added successfully!`);

   
    setFormData({
      vehicleName: "",
      owner: "",
      category: "",
      pricePerDay: "",
      location: "",
      availability: "Available",
      description: "",
      coverImage: "",
      userEmail: "user@example.com",
    });
  };

  return (
    <div className="px-4 py-8 max-w-3xl mx-auto">
      <h2 className="text-3xl text-center font-bold mb-6">Add Vehicle</h2>

      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <input
          type="text"
          name="vehicleName"
          placeholder="Vehicle Name"
          value={formData.vehicleName}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <input
          type="text"
          name="owner"
          placeholder="Owner Name"
          value={formData.owner}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="input input-bordered w-full"
        >
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
          value={formData.pricePerDay}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="input input-bordered w-full"
        >
          <option value="Available">Available</option>
          <option value="Booked">Booked</option>
        </select>

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="input input-bordered h-24 w-full"
        />

        <input
          type="text"
          name="coverImage"
          placeholder="Cover Image URL"
          value={formData.coverImage}
          onChange={handleChange}
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
