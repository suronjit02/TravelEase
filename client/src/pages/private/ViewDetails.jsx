import { useEffect, useState } from "react";
import { useParams } from "react-router";

const VehicleDetails = () => {
  const [vehicle, setVehicle] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/vehicles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setVehicle(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="text-center text-xl py-10 font-semibold">Loading...</div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={vehicle.coverImage}
        className="w-full h-64 object-cover rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-4">{vehicle.vehicleName}</h1>
      <p className="text-gray-600 text-lg">{vehicle.category}</p>

      <p className="mt-4 text-gray-500">{vehicle.description}</p>

      <div className="mt-6 p-4 border rounded-lg bg-gray-50">
        <h3 className="text-xl font-semibold">Details</h3>
        <p>
          <span className="font-bold">Owner:</span> {vehicle.owner}
        </p>
        <p>
          <span className="font-bold">Location:</span> {vehicle.location}
        </p>
        <p>
          <span className="font-bold">Availability:</span>{" "}
          {vehicle.availability}
        </p>
        <p className="text-blue-600 font-bold mt-2">
          Price Per Day: ${vehicle.pricePerDay}
        </p>
      </div>

      <button className="btn bg-blue-600 text-white px-5 py-2 rounded mt-5">
        Book Now
      </button>
    </div>
  );
};

export default VehicleDetails;
