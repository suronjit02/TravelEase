import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../provider/AuthProvider";

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
    <div className="max-w-6xl mx-auto p-6">
      {bookings.length === 0 && (
        <div className="text-center text-gray-500 text-lg mt-20">
          You have not booked any vehicles yet 🚗
        </div>
      )}

      {bookings.length > 0 && (
        <div className="flex flex-col gap-5">
          {bookings.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between shadow-sm rounded-lg p-1"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.coverImage}
                  className="max-h-20 max-w-25 object-cover rounded"
                />
                <span>
                  <h2 className="font-bold ">{item.vehicleName}</h2>
                  <h3 className="font-semibold text-sm">{item.category}</h3>
                </span>
              </div>

              <div className="text-center">
                <p>Booking Time</p>
                {new Date(item.bookedAt).toLocaleString("en-BD", {
                  timeZone: "Asia/Dhaka",
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </div>

              <p className="font-semibold text-sky-900">
                Booking for ${item.pricePerDay}/day
              </p>
              <p>{item.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBooking;
