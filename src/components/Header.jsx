
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
  } from "@headlessui/react";
import Logo from '../components/Logo';
import useAuth from "../hooks/useAuth";

const Header = () => {

  const { logOut } = useAuth();
  return (
    <header className="bg-white py-4 shadow-2xl absolute top-0 w-full">
            <div className="max-w-screen-2xl px-5  mx-auto flex flex-row justify-between items-center">
              <div className="w-48 "><Logo /></div>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton
                    className="flex items-center border-l-2 border-[#e3e6f0] whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                    href="#"
                    id="dropdownMenuButton2"
                  >
                    <span className="px-5 text-gray-600">Brayan</span>
                    <img
                      src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
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
