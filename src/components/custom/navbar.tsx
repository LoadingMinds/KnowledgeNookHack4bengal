import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center py-4 px-8 bg-black text-white border-b border-gray-500">
      <ul className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <li className="mx-2 md:mx-12">
            <a href="/" className="text-white no-underline">
              <img src="/assets/logo.svg" alt="KnowledgeNook Logo" className="h-10" />
            </a>
          </li>
        </div>
        <div className="flex items-center">
          <li className="mx-2 md:mx-12">
            <a href="/login" className="block">
              <Image
                src="/assets/avatar1.svg"
                alt="Profile"
                width={36}
                height={36}
                className="rounded-full"
              />
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
