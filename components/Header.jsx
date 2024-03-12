import React from "react";
import { BiMenu } from "react-icons/bi";
export default function Header({ toggleSidebar }) {
  return (
    <div className="flex justify-between items-center bg-black px-3 py-2 ml-[0px] lg:ml-[60px]">
      <div>
        <button
          data-drawer-target="sidebar-multi-level-sidebar"
          data-drawer-toggle="sidebar-multi-level-sidebar"
          aria-controls="sidebar-multi-level-sidebar"
          type="button"
          onClick={toggleSidebar}
          className="text-white rounded-md inline-flex items-center"
        >
          <BiMenu className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
