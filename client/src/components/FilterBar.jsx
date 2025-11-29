import { useState } from "react";

const FilterBar = ({ onFilter }) => {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [priceSort, setPriceSort] = useState("");

  const handleFilter = () => {
    onFilter({ category, location, priceSort });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-center ">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="input input-bordered"
      >
        <option value="">All Categories</option>
        <option value="SUV">SUV</option>
        <option value="Electric">Electric</option>
        <option value="Sedan">Sedan</option>
        <option value="Van">Van</option>
      </select>

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="input input-bordered"
      />

      <select
        value={priceSort}
        onChange={(e) => setPriceSort(e.target.value)}
        className="input input-bordered"
      >
        <option value="">Sort By Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>

      <button onClick={handleFilter} className="btn btn-wide mt-2 md:mt-0 bg-blue-500 hover:bg-blue-600 text-white">
        Apply
      </button>
    </div>
  );
};

export default FilterBar;
