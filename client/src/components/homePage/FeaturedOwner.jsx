const FeaturedOwner = () => {
  return (
    <div className="max-w-6xl mx-auto mt-15 rounded-md hover:shadow-md bg-gray-100 p-10">
      <h2 className="text-3xl text-center font-semibold mb-6">
        Featured Owner
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <img
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500"
          className="w-30 h-30 rounded-full object-cover"
        />

        <div className="">
          <h3 className="text-xl font-bold">Rahim Uddin</h3>
          <p className="text-gray-600 max-w-md">
            Trusted vehicle owner with 120+ successful bookings and top user
            ratings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedOwner;
