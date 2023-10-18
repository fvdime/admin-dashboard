"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const SidebarItems = [
    {
      id: 1,
      label: "Dashboard",
      svg: "M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z",
      href: "/",
    },
    {
      id: 2,
      label: "Appointments",
      svg: "M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z",
      href: "/appointments",
    },
    {
      id: 3,
      label: "Calendar",
      svg: "M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z",
      href: "/calendar",
    },
    {
      id: 4,
      label: "User",
      svg: "M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z",
      href: "/users",
    },
    {
      id: 5,
      label: "Settings",
      svg: "M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z",
      href: "/settings",
    },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-16"
      } h-screen bg-slate-400 p-2 transition-all ease-in duration-500 relative`}
    >
      <header
        className={`${
          isOpen ? "w-full flex justify-between items-center" : ""
        }`}
      >
        <div
          className={`w-full flex flex-row items-center cursor-pointer px-1 py-2 rounded-lg gap-2 ${
            !isOpen ? "justify-center" : "justify-between"
          }`}
        >
          <h1
            className={`text-xs font-bold origin-left duration-300 ${
              !isOpen && "hidden"
            } origin-left duration-300`}
          >
            admin
          </h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
          >
            {isOpen ? (
              <svg
                className="w-2 h-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            ) : (
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </header>
      <div className="py-4">
        <ul className="flex flex-col justify-start gap-2 text-sm font-semibold">
          {SidebarItems.map((item, index) => (
            <Link href={item.href} key={index}>
              <li
                className={`w-full flex flex-row items-center cursor-pointer hover:bg-slate-300 px-1 py-2 rounded-lg gap-2 ${
                  !isOpen ? "justify-center" : "justify-start"
                } ${index === 0 && "bg-slate-100"}`}
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d={item.svg}
                  ></path>
                </svg>
                <h1
                  className={`${!isOpen && "hidden"} origin-left duration-300`}
                >
                  {item.label}
                </h1>
              </li>
            </Link>
          ))}
          <li className="flex flex-row justify-between items-center absolute bottom-0 left-0 p-2 bg-slate-300 z-10 w-full">
            <Image
              src="/1.jpg"
              alt="user photo"
              width={36}
              height={36}
              className="rounded-full object-cover"
            />
            <h1
              className={`text-xs font-bold origin-left duration-300 ${
                !isOpen && "hidden"
              } origin-left duration-300`}
            >
              user name
            </h1>
          </li>
        </ul>
      </div>
      {/* <footer className="w-full h-screen fixed z-10 bottom-0 left-0 border-t border-slate-800">kcoz</footer> */}
      {/* <footer className={`${
        isOpen ? "w-64" : "w-16"
      } h-full bg-slate-300 transition-all ease-in duration-500`}>fkjpsda</footer> */}
    </div>
  );
};

export default Sidebar;
