"use client";
import { SideBarMenuType } from "@/types/SideBarMenuType";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBook } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";

function SideBarMenu() {
  const pathname = usePathname();

  const sidebarMenuList: SideBarMenuType[] = [
    {
      title: "Ledge Book",
      icon: (
        <>
          <GiNotebook size={20} />
        </>
      ),
      link: "/ledgerbook",
    },
    {
      title: "Credit Records",
      icon: (
        <>
          <MdOutlineAttachMoney size={20} />
        </>
      ),
      link: "/credit-record",
    },
  ];

  return (
    <div className="flex-col flex min-h-screen bg-neutral-800 text-neutral-200 w-1/6">
      {/* Logo */}
      <div className=" text-2xl bg-neutral-800/60 text-green-500 flex flex-row items-center p-4 gap-1">
        <FaBook />

        <span className="font-bold ">BahiKhata</span>
      </div>

      {/* Menu */}
      <div className="flex-col flex my-5 gap-5">
        {sidebarMenuList.map((menuItem) => (
          <Link href={menuItem?.link}>
            <div
              className={`flex flex-row items-center px-4 gap-2 ${
                pathname === menuItem?.link && "text-green-400"
              }`}
            >
              {menuItem?.icon}
              <span>{menuItem?.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideBarMenu;
