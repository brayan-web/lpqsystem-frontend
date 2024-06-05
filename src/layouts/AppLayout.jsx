import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
const AppLayout = () => {
  return (
    <>
      
          <div className="flex relative">
            <Header/>
            <Sidebar>

            
            </Sidebar>
             <Outlet/>

          </div>
          
    
      
    </>
  );
};

export default AppLayout;
