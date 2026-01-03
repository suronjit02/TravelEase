import { Link } from "react-router";

const VehicleCard = ({ vehicle }) => {
  return (
    <div
      className="p-4 rounded-sm shadow hover:shadow-md h-60 bg-no-repeat bg-center flex flex-col justify-end"
      style={{
        backgroundImage: `url(${vehicle.coverImage})`,
        backgroundSize: "cover",
      }}
    >
      {/* <img
        src={vehicle.coverImage}
        className="h-40 w-full object-cover rounded-lg"
      /> */}

      <div
        className="flex justify-between items-start 
      "
      >
        <h3
          className="text-2xl font-bold text-white"
          style={{
            textShadow: "2px 2px 6px black",
          }}
        >
          {vehicle.vehicleName}
        </h3>

        <Link
          to={`/vehicle-details/${vehicle._id}`}
          className="btn  btn-xs secondary shadow-none border-0 text-white"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default VehicleCard;
