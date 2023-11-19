import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  // const handleClick = (event) => {
  //   event.preventDefault(); // This will prevent the default link behavior
  //   // Perform any custom actions or navigation here
  //   console.log('Custom click handler executed');
  // };

  const menuLinks = [
    { name: "Home", link: "/" },
    { name: "About ", link: "/About " },
    { name: " Skills ", link: "/Skills" },
    { name: "Projects", link: "/Project " },
    { name: "Services", link: "/Services" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <div>
        <nav className="md:w-full left-0 top-0 z-[999] overflow-hidden ">
          <div>
            <div className="bg-black  md:w-full text-white md:block hidden px-7 py-5 font-medium ">
              <span className="font-bold  text-3xl  ">
                {" "}
                Portfolio.
                <ul className="flex float-right gap-7 text-lg justify-center item-center">
                  {menuLinks?.map((menu, i) => (
                    <li
                      onClick={() => setOpen(false)}
                      key={i}
                      className=" hover:text-indigo-500 my-2"
                    >
                      <Link to={menu?.link} onClick={() => setOpen(!open)}>
                        {menu?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </span>
            </div>
            <div className="bg-black md:hidden  py-5 px-5 text-xl justify-between text-white">
              <div>
                Menu
                {open ? (
                  <div
                    onClick={() => setOpen(!open)}
                    className={`md:hidden float-right text-white text-3xl ${
                      open ? "text-gray-900" : "text-gray-900"
                    }`}
                  >
                    <AiOutlineClose />
                  </div>
                ) : (
                  <div
                    onClick={() => setOpen(!open)}
                    className={`md:hidden float-right text-white text-3xl ${
                      open ? "text-gray-900" : "text-gray-200"
                    }`}
                  >
                    <AiOutlineMenu name="menu" />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className={`container mx-auto md:hidden absolute z-20 flex justify-between items-center duration-300 ${
              open ? "block" : "hidden"
            } md:block`}
          >
            <ul className=" pt-40 w-full pb-20 flex flex-col justify-center item-center text-primary font-semibold text-xl text-gray-900  bg-white top-50 max-w-xs ">
              {menuLinks?.map((menu, i) => (
                <li
                  key={i}
                  className="p-10 px-5 border border-gray-200 shadow-gray-400 py-5 w-400 "
                >
                  <Link to={menu?.link}>{menu?.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
