import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../provider/AuthProvider";
import { format } from "date-fns";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/my-bookings?email=${user.email}`)
      .then((res) => {
        setBookings(res.data);
      });
  }, [user.email]);

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-3 xs:p-2">
      {bookings.length === 0 && (
        <div className="text-center text-gray-500 text-lg sm:text-base xs:text-sm mt-20">
          You have not booked any vehicles yet 🚗
        </div>
      )}

      {bookings.length > 0 && (
        <div className="flex flex-col gap-5">
          {bookings.map((item) => {
            const bookedDate = new Date(item.bookedAt); // শুধু Date object
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
      )}
    </div>
  );
};

export default MyBooking;
