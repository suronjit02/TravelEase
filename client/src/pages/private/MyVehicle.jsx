import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router";
import toast from "react-hot-toast";
import { format } from "date-fns";
import { FaCar } from "react-icons/fa";

const MyVehicle = () => {
  const [myVehicle, setMyVehicle] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(
        `https://travel-ease-pied-six.vercel.app/my-vehicles?email=${user?.email}`
      )
      .then((res) => {
        setMyVehicle(res.data);
      })
      .catch((err) => console.log(err));
  }, [user?.email]);

  const handleDelete = (id) => {
    axios
      .delete(`https://travel-ease-pied-six.vercel.app/delete/${id}`)
      .then(() => {
        const filterData = myVehicle.filter((vehicle) => vehicle._id !== id);
        toast.success("Vehicle removed from your list!");
        setMyVehicle(filterData);
      })
      .catch((err) => console.log(err));
  };

  if (!myVehicle || myVehicle?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <div className="text-6xl text-secondary mb-2">
          <FaCar />
        </div>
        <h2 className="text-xl font-semibold">
          You haven’t added any vehicles yet
        </h2>
        <p className="text-gray-500 mt-2">
          Get started by adding your first vehicle
        </p>
        <Link
          to={"/add-vehicle"}
          className="btn mt-5 px-6  primary text-white "
        >
          Add Vehicle
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-x-auto max-w-6xl mx-auto mt-5">
        <table className="table">
          <tbody>
            {myVehicle.map((vehicle) => {
              const createdDate = new Date(vehicle.createdAt);
              return (
                <>
                  <tr key={vehicle._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="rounded-md h-12 w-15">
                            <img
                              src={vehicle.coverImage}
                              alt={vehicle?.vehicleName}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {vehicle?.vehicleName}
                          </div>
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
                      <Link
                        to={`/vehicle/${vehicle._id}`}
                        className="btn btn-xs"
                      >
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
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyVehicle;
