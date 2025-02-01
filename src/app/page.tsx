"use client"
import Link from "next/link";
import useUserStore from "./store/userStore";

export default function Home() {

  const user = useUserStore((state) => state.user)
  
  const setUser = useUserStore((state) => state.setUser)

  const userLogOut = useUserStore((state) => state.userLogOut)
  


  console.log(user)
 
  return (
    <div className="w-full h-dvh flex justify-center place-items-center gap-5">
        <Link href="pages/sign_in" className="button"> Sign in </Link>
        <Link href="pages/sign_up" className="button"> Sign up </Link>
        <button className="button" onClick={() =>   setUser({ 
          fullname : "krelian quimson",
          username : "krel",
          password : "123",
          profile : "123123213"
        })}> click </button>

        <button  className="button" onClick={userLogOut}> logout </button>
    </div>
  );
}
