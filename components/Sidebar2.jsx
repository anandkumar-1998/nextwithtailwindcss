'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaDashcube, FaHome, FaTable } from "react-icons/fa";
export default function Sidebar2({ children }) {
    let location = usePathname();
    console.log(location)
  return (
    <div className="container">
      <div className="flex">
        <div className="flex-none min-w-[25px] bg-black sticky top-0 h-screen">
          <div className="flex flex-col flex-nowrap bg-dark items-center sticky top-0">
            <a href="" className="block"></a>
            <ul className="flex flex-col flex-wrap sm:flex-nowrap mb-auto text-center items-center">
              <li className="flex items-center p-2">
                <Link href="/" className={`text-white py-3 px-4 rounded-md ${location === '/' ? 'bg-blue-500' : ""}`}>
                  <FaHome size={20} />
                </Link>
              </li>
              <li className="flex items-center p-2">
                <Link href="/dashboard" className={`text-white py-3 px-4 rounded-md ${location === '/dashboard' ? 'bg-blue-500' : ""}`}>
                  <FaTable size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 p-3 min-h-screen">{children}</div>
      </div>
    </div>
  );
}
