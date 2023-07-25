"use client";

import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { VscListFilter } from "react-icons/vsc";
import { FiArrowUpRight, FiArrowDownLeft } from "react-icons/fi";
import {
  AiOutlineMore,
  AiOutlinePrinter,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import SidebarSheet from "@/components/SideSheet/SidebarSheet";

function LeaderBook() {
  const [tabBarIndex, setTabBarIndex] = useState<string>("all");
  const [searchString, setSearchString] = useState<string>("");
  const [transactions, setTransactions] = useState<any>([]);
  const [enableFilters, setEnableFilters] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "http://localhost:4000/transaction?_page=1&_limit=30"
      );
      const items = await res.json();
      setTransactions(items);
    };

    getData();
  }, []);

  const categories: any = new Set(
    transactions?.map((item: any) => item.categories)
  );

  return (
    <div className="flex flex-col h-screen overflow-scroll ">
      {/* navbar */}
      <div className="flex-col flex shadow bg-white sticky top-0 z-50  py-2 px-5 gap-2">
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

          <div className="rounded-full bg-slate-100 border  flex flex-row  text-sm">
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
                tabBarIndex == "income" && "bg-green-500  text-white"
              }`}
              onClick={() => setTabBarIndex("income")}
            >
              <span>Income</span>
            </div>
            <div
              className={`rounded-full px-6 py-1 cursor-pointer ${
                tabBarIndex == "expense" && "bg-green-500  text-white"
              }`}
              onClick={() => setTabBarIndex("expense")}
            >
              <span>Expense</span>
            </div>
          </div>

          <div
            className={`rounded-full  py-1 px-3 cursor-pointer bg-slate-200 flex flex-row items-center justify-between gap-2 `}
          >
            <AiOutlinePrinter />
            <span className="text-sm">Print</span>
          </div>

          <button
            className="bg-slate-200 p-2 rounded-full"
            onClick={() => setEnableFilters(!enableFilters)}
          >
            <VscListFilter />
          </button>
          <button className="bg-slate-200 p-2 rounded-full">
            <AiOutlineMore />
          </button>
        </div>
        {/* Filters */}
        {enableFilters && (
          <div className="flex flex-row gap-3">
            <span className="font-bold">Filters</span>
            <div
              className={`rounded-full  py-1 px-3 cursor-pointer bg-slate-50 flex flex-row items-center justify-between gap-2 `}
            >
              <AiOutlineUnorderedList />
              <span className="text-sm">Category</span>
            </div>
          </div>
        )}
      </div>

      {/* main */}
      <div className="flex flex-row items-start  m-2 gap-2 mx-5">
        {/* list of transaction */}
        <div className="flex-1 shadow-sm rounded-md overflow-hidden flex flex-col">
          <div className="flex-row flex items-center  bg-white p-2">
            <span className=" flex-1 text-sm font-semibold">
              Transaction Details
            </span>

            <span className="text-xs  text-neutral-500 w-28 px-3 ">
              Category
            </span>

            <span className="text-xs text-neutral-500 w-28 px-30 font-semibold">
              Date
            </span>

            <span className=" text-xs font-semibold px-3 w-20  mr-6 ">
              Amount
            </span>
          </div>
          <hr className="border" />
          {transactions
            .filter((item: any) =>
              tabBarIndex == "all"
                ? true
                : item?.type?.toLowerCase() === tabBarIndex
            )
            .filter(({ description }: { description: string }) =>
              description
                ?.toLocaleLowerCase()
                ?.includes(searchString.toLocaleLowerCase())
            )
            .map((item: any) => {
              return (
                <div key={item?.id} className="flex-col flex ">
                  <div className="flex-row flex items-center  bg-white hover:bg-slate-50 cursor-pointer p-2">
                    <span className="flex-1 text-sm">{item?.description}</span>

                    <span className="text-xs text-neutral-500 w-28 px-3 ">
                      {item?.categories}
                    </span>

                    <span className="text-xs text-neutral-500 w-28 ">
                      {new Intl.DateTimeFormat("en-GB", {
                        dateStyle: "medium",
                        // timeStyle: "short",
                      }).format(item?.date)}
                    </span>

                    <span className="font-medium px-3 w-20">
                      $
                      {Intl.NumberFormat("en-IN", {
                        maximumSignificantDigits: 3,
                      }).format(item?.amount)}
                    </span>
                    {item?.type === "Expense" ? (
                      <FiArrowUpRight size={25} className="text-red-500" />
                    ) : (
                      <FiArrowDownLeft size={25} className="text-green-500" />
                    )}
                  </div>
                  <hr />
                </div>
              );
            })}
        </div>
        {/* information of transaction */}
        <div className="flex flex-col w-1/3 items-center sticky top-14 gap-3">
          <div className="flex-col flex w-full bg-white rounded-md p-2 shadow-sm gap-3">
            <span>Overview</span>
            <hr />
            <div className="flex-row flex gap-3 px-3">
              <div className="flex-col flex">
                <span className="text-xs">Total Income</span>
                <span className="font-semibold">
                  $
                  {new Intl.NumberFormat("en-IN", {
                    maximumSignificantDigits: 3,
                  }).format(
                    transactions
                      .filter((item: any) => item?.type === "Income")
                      .reduce((accumulator: any, currentValue: any) => {
                        return accumulator + currentValue.amount;
                      }, 0)
                  )}
                </span>
              </div>
              <div className="flex-col flex">
                <span className="text-xs">Total Expense</span>
                <span className="font-semibold ">
                  $
                  {new Intl.NumberFormat("en-IN", {
                    maximumSignificantDigits: 3,
                  }).format(
                    transactions
                      .filter((item: any) => item?.type === "Expense")
                      .reduce((accumulator: any, currentValue: any) => {
                        return accumulator + currentValue.amount;
                      }, 0)
                  )}
                </span>
              </div>
              <div className="mr-auto"></div>
              <div className="flex-col flex">
                <span className="text-xs">Balance</span>
                <span className="font-semibold ">
                  $
                  {new Intl.NumberFormat("en-IN", {
                    maximumSignificantDigits: 3,
                  }).format(
                    transactions
                      .filter((item: any) => item?.type === "Income")
                      .reduce((accumulator: any, currentValue: any) => {
                        return accumulator + currentValue.amount;
                      }, 0) -
                      transactions
                        .filter((item: any) => item?.type === "Expense")
                        .reduce((accumulator: any, currentValue: any) => {
                          return accumulator + currentValue.amount;
                        }, 0)
                  )}
                </span>
              </div>
            </div>
            <div className="flex-row flex items-center gap-2">
              <span className="text-sm font-semibold">
                Expense category vise
              </span>
              <hr className=" flex-1" />
            </div>
            <div className="flex flex-col px-3 gap-3">
              {[...categories].map((categoryItem: any) => (
                <div className="flex flex-row justify-between">
                  <span className="text-sm text-slate-500">{categoryItem}</span>

                  <span className="font-semibold text-sm">
                    $
                    {new Intl.NumberFormat("en-IN", {
                      maximumSignificantDigits: 3,
                    }).format(
                      transactions
                        .filter(
                          (item: any) => item?.categories === categoryItem
                        )
                        .reduce((accumulator: any, currentValue: any) => {
                          return accumulator + currentValue.amount;
                        }, 0)
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <SidebarSheet />

          <span className="text-sm text-slate-400">&copy; Bahikhata.com</span>
        </div>
      </div>
    </div>
  );
}

export default LeaderBook;
