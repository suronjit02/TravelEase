import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const VehicleDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [vehicle, setVehicle] = useState(null);
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3000/vehicles/${id}`).then((res) => {
      setVehicle(res.data);
    });
  }, [id]);

  const handleBooking = async () => {
    const bookingData = {
      vehicleId: vehicle._id,
      vehicleName: vehicle.vehicleName,
      category: vehicle.category,
      coverImage: vehicle.coverImage,
      pricePerDay: vehicle.pricePerDay,
      location: vehicle.location,
      userEmail: user.email,
      bookedAt: new Date().toISOString(),
    };

    try {
      await axios.post("http://localhost:3000/bookings", bookingData);
      toast.success("Booking Successful ✅");
      setIsBooked(true);
    } catch (err) {
      if (err.response?.status === 400) {
        toast.error("Already booked!");
        setIsBooked(true);
      }
    }
  };

  if (!vehicle) return null;

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

      <button
        onClick={handleBooking}
        disabled={isBooked}
        className={`btn px-5 py-2 rounded mt-5 text-white
    ${isBooked ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600"}
  `}
      >
        {isBooked ? "Booked" : "Book Now"}
      </button>
    </div>
  );
};

export default VehicleDetails;
