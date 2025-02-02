import Link from "next/link";

export default function Home() {


 
  return (
    <div className="w-full h-dvh flex justify-center place-items-center gap-5">
        <Link href="pages/sign_in" className="button"> Sign in </Link>
        <Link href="pages/sign_up" className="button"> Sign up </Link>
    </div>
  );
}
