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
        <div className="grid md:grid-cols-3 gap-6">
          {bookings.map((item) => (
            <div key={item._id} className="border rounded-lg p-4">
              <img
                src={item.coverImage}
                className="h-40 w-full object-cover rounded"
              />
              <h2 className="font-bold mt-2">{item.vehicleName}</h2>
              <p>{item.location}</p>
              <p className="font-semibold text-blue-600">
                ${item.pricePerDay}/day
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

};

export default MyBooking;
