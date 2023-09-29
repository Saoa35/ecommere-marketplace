import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow">
      <Link href="/">
        <Image
          src="https://st4.depositphotos.com/17967430/23378/v/450/depositphotos_233783454-stock-illustration-circle-swoosh-orbit-vector-satellite.jpg"
          width={70}
          height={70}
          alt="Logo"
        />
      </Link>

      <div className="flex items-center space-x-2.5 text-sm">
        <button className="button bg-green-600 text-white border-transparent hover:border-green-600 hover:bg-transparent hover:text-black">
          Login
        </button>
        <button className="button bg-transparent border-green-600 hover:bg-green-600 hover:text-white hover:border-transparent">
          Sign Up
        </button>
      </div>
    </header>
  );
};
