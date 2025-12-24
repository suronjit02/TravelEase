import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import FilterBar from "../components/FilterBar";
import VehicleCard from "../components/homePage/VehicleCard";
import { motion } from "framer-motion";

const AllVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const fetchVehicles = async (filters = {}) => {
    setLoading(true);
    try {
      let query = [];
      if (filters.category) query.push(`category=${filters.category}`);
      if (filters.location) query.push(`location=${filters.location}`);
      if (filters.priceSort) query.push(`sortPrice=${filters.priceSort}`);
      const queryString = query.length ? "?" + query.join("&") : "";

      const res = await axios.get(
        `https://travel-ease-pied-six.vercel.app/vehicles${queryString}`
      );
      setVehicles(res.data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    const category = searchParams.get("category") || "";
    const location = searchParams.get("location") || "";
    const priceSort = searchParams.get("sortPrice") || "";

    fetchVehicles({ category, location, priceSort });
  }, [searchParams]);

  const handleFilter = (filters) => {
    let params = {};

    if (filters.category) params.category = filters.category;
    if (filters.location) params.location = filters.location;
    if (filters.priceSort) params.sortPrice = filters.priceSort;

    setSearchParams(params);
    fetchVehicles(filters);
  };

  return (
    <div className="max-w-6xl mx-auto py-8">
      <h2 className="text-3xl text-center font-semibold mb-8">All Vehicles</h2>

      <FilterBar onFilter={handleFilter} />

      {loading ? (
        <div className="flex justify-center mt-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
          />
        </div>
      ) : vehicles.length === 0 ? (
        <div className="text-center mt-10 text-gray-600">No vehicles found</div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {vehicles.map((v) => (
            <VehicleCard key={v._id} vehicle={v} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllVehicles;
