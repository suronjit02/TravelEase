import { useEffect, useState } from "react";
import VehicleCard from "./VehicleCard";
import axios from "axios";

const LatestVehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/vehicles")
      .then((res) => setVehicles(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="my-20 px-20">
      <h2 className="text-3xl text-center text-sky-900 font-semibold mb-6">Latest Vehicles</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {vehicles.map((v) => (
          <VehicleCard key={v._id} vehicle={v} />
        ))}
      </div>
    </div>
  );
};

export default LatestVehicles;
