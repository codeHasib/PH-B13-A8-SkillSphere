"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathName = usePathname();
  const links = (
    <>
      <li>
        <Link
          href={"/"}
          className={
            pathName === "/"
              ? "border-b-3 border-orange-600 font-extrabold rounded-none transition-all duration-100 ease-in-out"
              : ""
          }
        >
          HOME
        </Link>
      </li>
      <li>
        <Link
          href={"/courses"}
          className={
            pathName === "/courses"
              ? "border-b-3 border-orange-600 rounded-none font-extrabold transition-all duration-100 ease-in-out"
              : ""
          }
        >
          COURSES
        </Link>
      </li>
      <li>
        <Link
          href={"/profile"}
          className={
            pathName === "/profile"
              ? "border-b-3 border-orange-600 rounded-none font-extrabold transition-all duration-100 ease-in-out"
              : ""
          }
        >
          PROFILE
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost text-xl font-space">
            SkillsSphere
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
