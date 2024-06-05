import { useState, createContext, useContext } from "react";
import { ChevronLeft, ChevronDown } from "./Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";


export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const handleToggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };
  return (
    <aside className="h-screen  ">
      <nav className="flex h-full flex-col items-center bg-[#079284] shadow-sm py-24">
    
          <ul className="flex-1 px-3">
          <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium cursor-pointer transition-colors group ${
        false
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-white hover:bg-opacity-30 text-gray-600"
      }`}
    >
      <FontAwesomeIcon icon={faTachometerAlt} className="text-white text-opacity-30 size-6" />
      <span
        className={`overflow-hidden transition-all text-white text-opacity-80 ${
          expanded ? "w-44 ml-3" : "w-0"
        }`}
      >
        Inicio
      </span>
  

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-[#079284]  text-white text-md invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          Inicio
        </div>
      )}
    </li>
    <hr className="py-2 border-t border-white border-opacity-15"/>
      <li onClick={handleToggleMenu} className={`${expanded ? 'text-left' : 'text-center'} transition duration-300`}>
        <span className={`uppercase text-white text-opacity-30 text-sm`}>menu</span>
      </li>
      <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium cursor-pointer transition-colors group ${
        false 
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-white hover:bg-opacity-30 text-gray-600"
      }`}
    >
      <FontAwesomeIcon icon={faTachometerAlt} className="text-white text-opacity-30 size-6" />
      <span
        className={`overflow-hidden transition-all text-white text-opacity-80 ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        Casos
      </span>
     
     {
      expanded ? (
        <ChevronDown className="absolute right-1 size-4 text-white text-opacity-50" />

      )
      :
      (
        <div
        className={`absolute right-1 w-2 h-2 rounded bg-white bg-opacity-30`}
      >
      </div>
      )
     }
       

      

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-[#079284]  text-white text-md invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          Inicio
        </div>
      )}
 
    </li>
          </ul>
        <button
          onClick={handleToggleExpanded}
          className="rounded-[100%] bg-white bg-opacity-20 hover:bg-opacity-30 p-3 transition duration-300"
        >
          <ChevronLeft className="size-4 text-white text-opacity-50" />
        </button>
      </nav>
    </aside>
  );
}

