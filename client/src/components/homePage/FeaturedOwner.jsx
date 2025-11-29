const FeaturedOwner = () => {
  return (
    <div className="my-12 px-20 bg-gray-100 p-10">
      <h2 className="text-3xl text-center font-semibold mb-6">Featured Owner</h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <img
          src="https://i.ibb.co/Lvx0jbg/owner.jpg"
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
