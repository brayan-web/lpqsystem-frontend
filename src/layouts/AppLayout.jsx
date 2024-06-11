import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
const AppLayout = () => {
  return (
    <>
      <div className="flex relative overflow-x-auto">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 app-layout overflow-x-auto">
            <div className="">

            <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
