"use client";

import { authClient } from "@/lib/auth-client";
import { FaGoogle } from "react-icons/fa6";

const GoogleAuthBtn = () => {
  async function handleSignIn() {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/courses",
    });
  }

  return (
    <button
      className="flex justify-center items-center gap-2 p-4 mt-2 w-full bg-black text-white"
      onClick={handleSignIn}
    >
      SIGN IN WITH GOOGLE <FaGoogle></FaGoogle>
    </button>
  );
};

export default GoogleAuthBtn;
