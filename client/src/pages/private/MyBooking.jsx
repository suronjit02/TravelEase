import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../provider/AuthProvider";
import { format } from "date-fns";
import { FaCar } from "react-icons/fa";
import { Link } from "react-router";
import LoadingSpiner from "../../components/LoadingSpiner";

const MyBooking = () => {
  const { user, loading } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(
        `https://travel-ease-pied-six.vercel.app/my-bookings?email=${user.email}`
      )
      .then((res) => {
        setBookings(res.data);
      })
      .finally(() => setDataLoading(false));
  }, [user?.email]);

  if (loading || dataLoading) {
    return <LoadingSpiner></LoadingSpiner>;
  }

  if (bookings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <div className="text-6xl text-secondary mb-2">
          <FaCar />
        </div>
        <h2 className="text-xl font-semibold">
          You haven’t booked any vehicles yet
        </h2>
        <p className="text-gray-500 mt-2">
          Get started by booking your first vehicle
        </p>
        <Link
          to={"/all-vehicles"}
          className="btn mt-5 px-6  primary text-white "
        >
          All Vehicles
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-3 xs:p-2">
      <div className="flex flex-col gap-5">
        {bookings.map((item) => {
          const bookedDate = new Date(item.bookedAt);
          return (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm rounded-lg p-4 sm:p-3 xs:p-2 gap-3"
            >
              <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <img
                  src={item.coverImage}
                  className="h-20 w-24 sm:h-20 sm:w-24 xs:h-16 xs:w-20 object-cover rounded"
                />
                <span className="flex flex-col">
                  <h2 className="font-bold text-base sm:text-sm xs:text-xs">
                    {item.vehicleName}
                  </h2>
                  <h3 className="font-semibold text-sm sm:text-xs xs:text-xs">
                    {item.category}
                  </h3>
                </span>
              </div>

              <div className="text-sm sm:text-xs xs:text-xs">
                <p>Booking Time</p>
                {format(bookedDate, "dd/MM/yyyy hh:mm a")}
              </div>

              <p className="font-semibold text-sky-900 text-sm sm:text-xs xs:text-xs">
                Booking for ${item.pricePerDay}/day
              </p>

              <p className="text-sm sm:text-xs xs:text-xs">{item.location}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyBooking;
