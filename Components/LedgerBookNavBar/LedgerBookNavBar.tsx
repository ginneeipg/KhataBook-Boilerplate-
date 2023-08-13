import React from "react";
import {
  AiOutlineMore,
  AiOutlinePrinter,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { VscListFilter } from "react-icons/vsc";
import { BsCalendarDate } from "react-icons/bs";

function LedgerBookNavBar({
  searchString,
  setSearchString,
  tabBarIndex,
  setTabBarIndex,
  enableFilters,
  setEnableFilters,
}: {
  searchString: string;
  setSearchString: any;
  tabBarIndex: string;
  setTabBarIndex: any;
  enableFilters: boolean;
  setEnableFilters: any;
}) {
  return (
    <div className="flex-col flex  bg-white sticky top-0 z-50  py-2 px-5 gap-2">
      <div className="flex flex-row items-center  justify-between  gap-2">
        <div className="flex-row flex  items-center justify-start gap-2 bg-white border mr-auto dark:bg-zinc-800 px-2 py-1 rounded-md w-full sm:w-1/2 md:w-1/4     focus-within:flex-grow  focus-within:border-none focus-within:ring-1 focus-within:ring-green-600 ">
          <BiSearchAlt size={25} className="text-neutral-300" />
          <input
            type="text"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            placeholder="Search entry..."
            className="bg-transparent outline-none text-sm flex-1"
          />
        </div>

        <div
          className={`rounded-full  py-1 px-3 cursor-pointer border border-slate-200  flex flex-row items-center justify-between gap-2 `}
        >
          <BsCalendarDate />
          <span className="text-sm">This month</span>
        </div>

        <div className="rounded-full  border  border-slate-200 flex flex-row  text-sm">
          <div
            className={`rounded-full px-6 py-1 cursor-pointer ${
              tabBarIndex == "all" && "bg-green-500  text-white"
            }`}
            onClick={() => setTabBarIndex("all")}
          >
            <span>All</span>
          </div>
          <div
            className={`rounded-full px-6 py-1 cursor-pointer ${
              tabBarIndex === "income" && "bg-green-500  text-white"
            }`}
            onClick={() => setTabBarIndex("income")}
          >
            <span>Income</span>
          </div>
          <div
            className={`rounded-full px-6 py-1 cursor-pointer ${
              tabBarIndex === "expense" && "bg-green-500  text-white"
            }`}
            onClick={() => setTabBarIndex("expense")}
          >
            <span>Expense</span>
          </div>
        </div>

        <button
          className="border border-slate-200 p-2 rounded-full"
          onClick={() => setEnableFilters(!enableFilters)}
        >
          <VscListFilter />
        </button>
        <button className="border border-slate-200 p-2 rounded-full">
          <AiOutlineMore />
        </button>
      </div>
      {/* Filters */}
      {enableFilters && (
        <div className="flex flex-row gap-3 items-center">
          <span className="font-bold">Filters:</span>
          <div
            className={`rounded-full  py-1 px-3 cursor-pointer bg-slate-50 border border-slate-200 flex flex-row items-center justify-between gap-2 `}
          >
            <AiOutlineUnorderedList />
            <span className="text-sm">Category</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default LedgerBookNavBar;
