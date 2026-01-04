import { useState } from "react";
import { Outlet } from "react-router";
import Aside from "../dashboard/component/Aside";
import DashboardTopbar from "../dashboard/component/DashboardTopbar";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen overflow-hidden">
      <DashboardTopbar setOpen={setOpen} />

      <div className="flex h-full">
        <Aside isOpen={open} setOpen={setOpen} />

        <main className="flex-1 h-full overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
