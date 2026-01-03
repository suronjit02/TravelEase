import { useEffect, useState } from "react";
import axios from "axios";

const TopCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoryNames = ["SUV", "Electric", "Sedan", "Van"];

    Promise.all(
      categoryNames.map((category) =>
        axios.get(
          `https://travel-ease-pied-six.vercel.app/vehicles?category=${category}`
        )
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
    <div className="max-w-6xl mx-auto mt-16 sm:mt-12 xs:mt-8 px-4 sm:px-2">
      <h2 className="text-3xl sm:text-2xl xs:text-xl font-semibold text-center">
        Top Categories
      </h2>
      <p className="text-center mb-6 text-secondary max-w-[500px] mx-auto">
        Find the perfect ride by browsing our most loved vehicle categories.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="rounded-sm overflow-hidden shadow group cursor-pointer"
          >
            <img
              src={category.vehicle?.coverImage}
              alt={category.name}
              className="h-40 sm:h-32 xs:h-28 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-3 text-center font-semibold text-base sm:text-sm xs:text-xs">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
