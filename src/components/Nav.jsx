"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { LuLogOut } from "react-icons/lu";
import { usePathname, useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
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
            pathName === "/courses" || pathName.startsWith("/courses/")
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
            pathName === "/profile" || pathName.startsWith("/profile/")
              ? "border-b-3 border-orange-600 rounded-none font-extrabold transition-all duration-100 ease-in-out"
              : ""
          }
        >
          MY PROFILE
        </Link>
      </li>
    </>
  );

  function logOut() {
    signOut();
    router.push("/");
  }

  const { data, isPending } = useSession();

  const userName = data?.user.name[0].toUpperCase();

  const userAvatarCompo = (
    <>
      <div className="flex justify-center items-center gap-3">
        <Link
          href={"/profile"}
          className="h-10 block w-10 rounded-full bg-orange-600 flex justify-center items-center text-white font-bold font-space"
        >
          {userName}
        </Link>

        <button
          onClick={logOut}
          className="justify-center items-center gap-2 p-3 hidden lg:flex md:flex bg-black text-white font-semibold"
        >
          LOGOUT <LuLogOut></LuLogOut>
        </button>
      </div>
    </>
  );

  return (
    <div className="sticky top-0 left-0 z-90">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {links}
              {data ? (
                <li>
                  <button
                    onClick={logOut}
                    className="justify-center md:hidden items-center gap-2 p-3 flex bg-black text-white font-semibold"
                  >
                    LOGOUT <LuLogOut></LuLogOut>
                  </button>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
          <Link
            href={"/"}
            className="btn btn-ghost text-xl font-space uppercase"
          >
            SkillsSphere
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {data ? (
            userAvatarCompo
          ) : (
            <div className="flex items-center justify-center gap-2 ">
              <Link
                href={"/auth/signin"}
                className={
                  pathName === "/auth/signin"
                    ? "hidden"
                    : "btn btn-ghost font-space font-semibold hidden md:flex lg:flex"
                }
              >
                {" "}
                LOGIN{" "}
              </Link>
              <Link
                href={"/auth/signup"}
                className={
                  pathName === "/auth/signup"
                    ? "hidden"
                    : "p-2 bg-black text-white font-space font-semibold"
                }
              >
                {" "}
                JOIN_NOW{" "}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
