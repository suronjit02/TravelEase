import { useEffect, useState } from "react";
import VehicleCard from "./VehicleCard";
import axios from "axios";
import { Link } from "react-router";
import LoadingSpiner from "../LoadingSpiner";

const LatestVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://travel-ease-pied-six.vercel.app/vehicles?latest=true")
      .then((res) => setVehicles(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <LoadingSpiner></LoadingSpiner>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 xs:mt-6 sm:mt-15 px-4 sm:px-2">
      <h2 className="text-3xl sm:text-2xl xs:text-xl text-center font-semibold ">
        Latest Vehicles
      </h2>
      <p className="text-center mb-6 text-secondary max-w-[500px] mx-auto">
        Explore our newest additions, designed to make every journey smooth,
        comfortable, and reliable.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {vehicles.slice(0, 6).map((v) => (
          <VehicleCard key={v._id} vehicle={v} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to="/all-vehicles"
          className="btn border-sky-900 bg-white text-secondary mt-4 "
        >
          Explore All Vehicles
        </Link>
      </div>
    </div>
  );
};

export default LatestVehicles;
