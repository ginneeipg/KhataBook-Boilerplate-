"use client";
import { SideBarMenuType } from "@/types/SideBarMenuType";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiChevronDown, BiCog, BiHelpCircle } from "react-icons/bi";
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

        <span className="font-bold italic ">Zeeoro</span>
      </div>

      {/* Menu */}
      <div className="flex-col flex ">
        {sidebarMenuList.map((menuItem) => (
          <Link key={menuItem?.link} href={menuItem?.link}>
            <div
              className={`flex flex-row items-center px-4  gap-2 hover:bg-neutral-900/40 p-2 ${
                pathname === menuItem?.link &&
                "text-green-400 bg-neutral-900/70 border-l-4 border-green-500"
              }`}
            >
              {menuItem?.icon}
              <span>{menuItem?.title}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="my-auto" />

      <Link href={"/help"}>
        <div
          className={`flex flex-row items-center px-4 my-2 gap-2 ${
            pathname === "help" && "text-green-400"
          }`}
        >
          <span>
            <BiHelpCircle size={20} />
          </span>
          {"Help"}
        </div>
      </Link>

      <Link href={"/settings"}>
        <div
          className={`flex flex-row items-center px-4 my-2 gap-2 ${
            pathname === "settings" && "text-green-400"
          }`}
        >
          <span>
            <BiCog size={20} />
          </span>
          {"Settings"}
        </div>
      </Link>
      {/* Selected Book */}
      <div className="bg-neutral-900/70 p-3 m-3 rounded-md flex flex-row items-center justify-between">
        <div className="flex-col flex">
          <span className="text-xs">Selected book</span>
          <span>Personal Book</span>
        </div>
        <BiChevronDown size={20} />
      </div>
    </div>
  );
}

export default SideBarMenu;
