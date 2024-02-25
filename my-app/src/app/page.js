import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex items-center justify-center space-x-4">
      <h1 className="text-6xl font-bold font-sans text-center">
        Michael Richardson
      </h1>
      <FaGithub className="text-gray-800 text-3xl" />
      <FaLinkedin className="text-blue-600 text-3xl" />
      <FaInstagram className="text-pink-400 text-3xl" />
    </div>
  );
}
