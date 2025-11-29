import { Link } from "react-router";

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="border p-4 rounded-md shadow hover:shadow-lg transition">
      <img
        src={vehicle.coverImage}
        className="h-40 w-full object-cover rounded-lg"
      />

      <h3 className="text-xl font-bold mt-3">{vehicle.vehicleName}</h3>
      <p className="text-gray-600">{vehicle.category}</p>

      <div className="flex justify-between items-center">
        <p className="font-semibold text-blue-600">
          ${vehicle.pricePerDay}/day
        </p>

        <Link
          to={`/vehicle/${vehicle._id}`}
          className="btn mt-3 inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white "
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default VehicleCard;
