import React from "react";

const FeaturedOwner = () => {
  return (
    <div className="max-w-6xl mx-auto mt-12 sm:mt-8 xs:mt-6 rounded-md hover:shadow-md bg-white/30 backdrop-blur-md border border-white/30 p-10 sm:p-6 xs:p-4">
      <h2 className="text-3xl sm:text-2xl xs:text-xl text-center text-sky-900 font-semibold mb-6">
        Featured Owner
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <img
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500"
          className="w-32 h-32 sm:w-24 sm:h-24 xs:w-20 xs:h-20 rounded-full object-cover"
        />

        <div className="text-center md:text-left">
          <h3 className="text-xl sm:text-lg xs:text-base text-sky-900 font-bold">
            Rahim Uddin
          </h3>
          <p className="text-gray-800 max-w-md sm:max-w-sm xs:max-w-[200px] text-base sm:text-sm xs:text-xs mt-2">
            Trusted vehicle owner with 120+ successful bookings and top user
            ratings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedOwner;
