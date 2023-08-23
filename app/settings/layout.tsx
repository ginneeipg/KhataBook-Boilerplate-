"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  AiOutlineAppstoreAdd,
  AiOutlineBell,
  AiOutlineLogout,
  AiOutlineSecurityScan,
  AiOutlineUser,
} from "react-icons/ai";
import { FiBook } from "react-icons/fi";

function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const menuItemList = [
    {
      id: "account-setting",
      name: "Account",
      icon: <AiOutlineUser size={20} />,
      link: "/settings",
    },
    // {
    //   id: "manage-notifications",
    //   name: "Manage notification",
    //   icon: <AiOutlineBell size={20} />,
    //   link: "/settings/notifications",
    // },
    {
      id: "security-setting",
      name: "Security",
      icon: <AiOutlineSecurityScan size={20} />,
      link: "/settings/security",
    },
    // {
    //   id: "book-settings",
    //   name: "Book Settings",
    //   icon: <FiBook size={20} />,
    //   link: "/settings/book-settings",
    // },
  ];
  return (
    <div className="flex flex-row">
      <div className="flex-col flex bg-white w-1/4 items-start min-h-screen p-2 gap-3">
        <span className="text-lg font-bold">Settings</span>

        <span className="text-sm text-slate-500">General </span>
        <div className="flex-col flex w-full gap-1 ">
          {menuItemList.map((item: any, index: any) => (
            <Link href={item?.link} key={item?.id}>
              <div
                className={`hover:bg-slate-100 w-full py-1 px-3 rounded-lg flex flex-row item-center gap-2 cursor-pointer ${
                  pathname.endsWith(item?.link) ? `bg-slate-100` : `bg-red`
                }`}
              >
                {item?.icon}
                <span>{item?.name}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="my-auto"></div>
        <button className="flex flex-row items-center hover:bg-red-50 border hover:border-red-200 hover:text-red-600 p-2 rounded-lg w-full justify-center gap-2">
          <AiOutlineLogout />
          <span>Log out</span>
        </button>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default Layout;
