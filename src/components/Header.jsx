
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
  } from "@headlessui/react";
import Logo from '../components/Logo';
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";

const Header = () => {

  const { logOut } = useAuth();
  const { userData } = useUser();
  const name = userData && userData.nombre ? userData.nombre : '';
  
 
  return (
    <header className="bg-white py-3 shadow-2xl absolute top-0 w-full">
            <div className="w-full px-10   mx-auto flex flex-row justify-between items-center">
              <div className="w-40 "><Logo /></div>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton
                    className="flex items-center border-l-2 border-[#e3e6f0] whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                    href="#"
                    id="dropdownMenuButton2"
                  >
                    <span className="px-5 text-gray-600">{name}</span>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUuZfNgsoQy6_mFR7rZ02z1grXiL8zFYzlevcxkO59PzSInG5g&s"
                      className="rounded-full w-12 h-12"
                      alt=""
                      loading="lazy"
                    />
                  </MenuButton>
                  <Transition
                    enter="transition ease-out duration-75"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        <MenuItem>
                          {({ active }) => (
                            <a
                              href="#"
                              className={`${
                                active ? "bg-gray-100" : ""
                              } flex justify-between w-full px-4 py-2 text-sm leading-5 text-gray-900`}
                            >
                              Perfil
                            </a>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ active }) => (
                            <a
                              onClick={logOut}
                              href="#"
                              className={`${
                                active ? "bg-gray-100" : ""
                              } flex justify-between w-full px-4 py-2 text-sm leading-5 text-gray-900`}
                            >
                              Salir
                            </a>
                          )}
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </Transition>
                </div>
              </Menu>
            </div>
          </header>
  )
}

export default Header
