import { useEffect, useState } from "react";
import VehicleCard from "./VehicleCard";
import axios from "axios";

const LatestVehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios
      .get("https://travel-ease-pied-six.vercel.app/vehicles?latest=true")
      .then((res) => setVehicles(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10 sm:mt-8 xs:mt-6 px-4 sm:px-2">
      <h2 className="text-3xl sm:text-2xl xs:text-xl text-center font-semibold mb-6">
        Latest Vehicles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {vehicles.slice(0, 6).map((v) => (
          <VehicleCard key={v._id} vehicle={v} />
        ))}
      </div>
    </div>
  );
};

export default LatestVehicles;
