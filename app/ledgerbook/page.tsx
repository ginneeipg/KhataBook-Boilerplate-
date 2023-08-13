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
import SidebarSheet from "@/components/SideSheet/AddTransactionSheet";
import LedgerBookNavBar from "@/components/LedgerBookNavBar/LedgerBookNavBar";
import CustomeSideBar from "@/components/SideSheet/CustomeSideBar";

function LeaderBook() {
  const [tabBarIndex, setTabBarIndex] = useState<string>("all");
  const [searchString, setSearchString] = useState<string>("");
  const [enableFilters, setEnableFilters] = useState<boolean>(false);
  const [transactions, setTransactions] = useState<any>([]);

  const [showSheet, setShowSheet] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "http://localhost:4000/transaction?_page=1&_limit=30"
      );
      const items = await res.json();
      setTransactions(items);
    };

    getData();
  }, [open]);

  const categories: any = new Set(
    transactions?.map((item: any) => item.categories)
  );

  return (
    <>
      <div className="flex flex-col h-screen overflow-scroll ">
        {/* navbar */}
        <LedgerBookNavBar
          searchString={searchString}
          setSearchString={setSearchString}
          enableFilters={enableFilters}
          setEnableFilters={setEnableFilters}
          tabBarIndex={tabBarIndex}
          setTabBarIndex={setTabBarIndex}
        />
        {/* main */}
        <div className="flex flex-row items-start   ">
          {/* list of transaction */}
          <div className="flex-1 shadow-md rounded-xl overflow-hidden m-3 flex flex-col">
            <div className="flex-row flex items-center  bg-white p-3">
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
                tabBarIndex === "all"
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
                    <div className="flex-row flex items-center  bg-white hover:bg-slate-50 cursor-pointer py-2 px-3">
                      <span className="flex-1 text-sm">
                        {item?.description}
                      </span>

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
                        ₹
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
            <div className="flex-col flex w-full bg-white border  p-3  gap-3">
              <span className="font-semibold">Overview</span>
              <div className="flex flex-col overflow-hidden justify-center items-center gap-2 border border-slate-200 rounded-xl">
                <div className="flex flex-row justify-around  p-3 w-full">
                  <div className="flex-col flex items-center justify-center">
                    <span className="text-sm font-semibold">You will give</span>
                    <span className="font-bold text-red-500">
                      ₹
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
                  <div className="flex-col flex items-center justify-center">
                    <span className="text-sm font-semibold">
                      You will receive
                    </span>
                    <span className="font-bold text-green-500">
                      ₹
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
                  <div className="flex-col flex items-center justify-center">
                    <span className="text-sm font-semibold">Net balance</span>
                    <span className="font-bold text-green-500">
                      ₹
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
                <button
                  // onClick={() => SetshowAllTransactions(true)}
                  className="w-full p-2 bg-slate-100 hover:bg-slate-200"
                >
                  <span className="text-sm">View Insights</span>
                </button>
              </div>

              <div className="flex-row flex items-center gap-2">
                <span className="text-sm font-semibold">Category vise</span>
                <hr className=" flex-1" />
              </div>
              <div className="flex flex-col  ">
                {[...categories].map((categoryItem: any) => (
                  <div
                    key={categoryItem?.id}
                    className="flex flex-row justify-between hover:bg-slate-50 rounded-lg cursor-pointer p-2"
                  >
                    <span className="text-sm text-slate-500">
                      {categoryItem}
                    </span>

                    <span className="font-semibold text-sm">
                      ₹
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
            <SidebarSheet open={open} setOpen={setOpen} />

            <span className="text-sm text-slate-400">
              &copy; 2023 Zeeoro, Inc.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeaderBook;
