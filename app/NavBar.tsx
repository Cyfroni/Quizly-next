import Image from "next/image";
import Link from "next/link";

const navs = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Test",
    path: "/test",
  },
];

export default function NavBar() {
  return (
    <div className="flex bg-rose-500">
      <Image
        src="/quizly-logo-big.svg"
        alt="Quizly logo"
        width={40}
        height={40}
        className="my-1 mx-3"
      />
      <ul className="flex items-center text-white">
        {navs.map(({ name, path }) => (
          <li key={path}>
            <Link
              href={path}
              className="block rounded-md px-2 py-1 hover:bg-rose-400"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
