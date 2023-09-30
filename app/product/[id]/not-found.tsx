import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-28 flex flex-col items-center gap-2">
      <h2 className=" font-bold">Not Found</h2>
      <p className=" font-semibold">Could not find requested resource</p>
      <Link
        href="/"
        className="border border-red-600 bg-red-100 px-2 py-1 rounded-xl hover:text-white hover:bg-slate-700 hover:border-none"
      >
        Return Home
      </Link>
    </div>
  );
}
