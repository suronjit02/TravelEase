import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router";
import toast from "react-hot-toast";
import { format } from "date-fns";

const MyVehicle = () => {
  const [myVehicle, setMyVehicle] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/my-vehicles?email=${user?.email}`)
      .then((res) => {
        setMyVehicle(res.data);
      })
      .catch((err) => console.log(err));
  }, [user?.email]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/delete/${id}`)
      .then((res) => {
        const filterData = myVehicle.filter((vehicle) => vehicle._id !== id);
        toast.success("Vehicle removed from your list!");
        setMyVehicle(filterData);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="overflow-x-auto max-w-6xl mx-auto mt-5">
        <table className="table">
          <tbody>
            {myVehicle.map((vehicle) => {
              const createdDate = new Date(vehicle.createdAt); // Date object
              return (
                <tr key={vehicle._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="rounded-xl h-12 w-12">
                          <img
                            src={vehicle.coverImage}
                            alt={vehicle?.vehicleName}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{vehicle?.vehicleName}</div>
                        <div className="text-sm opacity-50">
                          {vehicle.category}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{vehicle.location}</td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {format(createdDate, "dd/MM/yyyy hh:mm a")}
                    </span>
                  </td>

                  <td>
                    <Link to={`/vehicle/${vehicle._id}`} className="btn btn-xs">
                      View Details
                    </Link>
                  </td>
                  <td>
                    <Link to={`/update-vehicle/${vehicle?._id}`}>
                      <button className="btn btn-xs">Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(vehicle?._id)}
                      className="btn btn-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyVehicle;
