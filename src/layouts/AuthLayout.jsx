import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
const AuthLayout = () => {
  return (
    <>
      <div className="min-h-screen bg-[#079284] px-5 py-14">
        <div className="py-10 px-5 bg-white shadow-xl rounded-md mx-auto  max-w-xs sm:max-w-md lg:max-w-4xl">
          <div className="flex gap-20">
            <div className=" items-center hidden lg:flex  lg:w-1/2">
             {/*<Logo className="border" />*/}
            </div>
            <div className="w-full lg:w-1/2">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
