import { useEffect, useState } from "react";
import axios from "axios";

const TopCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoryNames = ["SUV", "Electric", "Sedan", "Van"];

    Promise.all(
      categoryNames.map((category) =>
        axios.get(`http://localhost:3000/vehicles?category=${category}`)
      )
    ).then((responses) => {
      const data = responses.map((res, i) => ({
        name: categoryNames[i],
        vehicle: res.data[0],
      }));

      setCategories(data);
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-15">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Top Categories
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden shadow group cursor-pointer"
          >
            <img
              src={category.vehicle?.coverImage}
              alt={category.name}
              className="h-40 w-full object-cover group-hover:scale-105 transition"
            />
            <div className="p-3 text-center font-semibold">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
