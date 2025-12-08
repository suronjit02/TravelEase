import { Link } from "react-router";

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="p-4 rounded-md shadow hover:shadow-lg transition bg-white/30 backdrop-blur-md border border-white/30">
      <img
        src={vehicle.coverImage}
        className="h-40 w-full object-cover rounded-lg"
      />

      <div
        className="flex justify-between items-start mt-2
      "
      >
        <div>
          <h3 className="text-xl font-bold">{vehicle.vehicleName}</h3>
          <p className="text-gray-700">{vehicle.category}</p>
        </div>
        <h4>{vehicle.location}</h4>
      </div>

      <div className="flex justify-between items-center">
        <p className="font-semibold text-gray-800">
          Price: ${vehicle.pricePerDay}/day
        </p>

      
        <Link
          to={`/vehicle/${vehicle._id}`}
          className="btn border-none bg-linear-to-r bg-sky-600 hover:bg-sky-700 mt-3 inline-block px-4 py-2 text-white "
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default VehicleCard;
