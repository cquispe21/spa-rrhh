import EvaluationIcon from "@/icons/EvaluationIcon";
import { Link } from "react-router-dom";
import { menuItems } from "./MenuItems";

interface ContentnavProps {
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
  OpenMenu: boolean;
  setOpenMenu: (value: boolean) => void;
  OpenMenuMobile: boolean;
  setOpenMenuMobile: (value: boolean) => void;
}
function Contentnav({
  isHovered,
  setIsHovered,
  OpenMenu,
  setOpenMenu,
  OpenMenuMobile,
  setOpenMenuMobile,
}: ContentnavProps) {
  return (
    <>
      <nav className="mt-6">
        <button
          type="button"
          className={`group w-full rounded-md bg-gray-100  ${
            OpenMenu ? "p-0" : "p-0"
          } text-left text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-100`}
          id="options-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <span className="flex w-full items-center justify-between">
            <span className="flex min-w-0 items-center justify-between space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-10 p-1.5 w-10 flex-shrink-0 rounded-full dark:text-white dark:group-hover:text-black "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </span>
          </span>
        </button>
        <ul className="space-y-1">
          {menuItems.map(({ to, label, icon }) => (
            <Link key={label} to={to}>
              <li className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-300 hover:bg-gray-200 hover:text-gray-900">
                {icon}
                {(isHovered && !OpenMenu) || OpenMenu || OpenMenuMobile ? (
                  <p className="group-hover:text-black dark:group-hover:text-black">
                    {label}
                  </p>
                ) : null}
              </li>
            </Link>
            
          ))}

          
        </ul>
      </nav>
    </>
  );
}

export default Contentnav;
