"use client";

import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { VscListFilter } from "react-icons/vsc";
import { FiArrowUpRight, FiArrowDownLeft } from "react-icons/fi";

import SidebarSheet from "@/components/SideSheet/AddTransactionSheet";
import LedgerBookNavBar from "@/components/LedgerBookNavBar/LedgerBookNavBar";
import CustomeSideBar from "@/components/SideSheet/CustomeSideBar";
import {
  AiOutlineCalendar,
  AiOutlineFileImage,
  AiOutlineUnorderedList,
} from "react-icons/ai";

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
        <div className="flex flex-row items-start  mx-5 mt-3 gap-3">
          {/* list of transaction */}
          <div className="flex-col flex flex-1 gap-3  ">
            <span className="font-semibold">
              {tabBarIndex === "all"
                ? "All Transactions"
                : tabBarIndex === "income"
                ? "All Incomes"
                : "All Expenses"}
            </span>
            <div className="  flex flex-col shadow-md rounded-xl overflow-hidden">
              <div className="flex-row flex items-center  bg-white py-3 px-5">
                <span className=" flex-1 text-sm font-semibold">
                  Transaction Details
                </span>
                {/* 
                <span className="text-xs  text-neutral-500 w-28 px-3 ">
                  Category
                </span>

                <span className="text-xs text-neutral-500 w-28 px-30 font-semibold">
                  Date
                </span> */}

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
                    <div key={item?.id} className="flex-col flex">
                      <div className="flex-row flex items-center  bg-white hover:bg-slate-50 cursor-pointer py-3 px-5 gap-2">
                        <div className="flex-1 flex flex-col gap-2 ">
                          <span className="text-sm">{item?.description}</span>
                          <div className="text-[0.625rem] font-light text-slate-500 flex flex-row gap-3 items-center">
                            <div className="flex flex-row gap-2 items-center">
                              <span>Receipt:</span>
                              <div className="bg-green-50 rounded-md text-green-600 border border-green-200 px-2 py-[0.05rem] flex flex-row items-center gap-1">
                                <AiOutlineFileImage />
                                <span>Image.jpeg</span>
                              </div>
                            </div>
                            <div className="flex flex-row gap-1 items-center">
                              <span>Category:</span>
                              <div className="bg-orange-50 rounded-md text-orange-600 border border-orange-200 px-1 py-[0.05rem] flex flex-row items-center gap-1">
                                <AiOutlineUnorderedList />
                                <span>{item?.categories}</span>
                              </div>
                            </div>
                            <div className="flex flex-row gap-1 items-center">
                              <span>Date:</span>
                              <div className="bg-violet-50 rounded-md text-violet-600 border border-violet-200 px-1 py-[0.05rem] flex flex-row items-center gap-1">
                                <AiOutlineCalendar />
                                <span className=" text-neutral-500 ">
                                  {new Intl.DateTimeFormat("en-GB", {
                                    dateStyle: "medium",
                                    // timeStyle: "short",
                                  }).format(item?.date)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex-col flex items-start gap-1">
                          <span className="font-medium ">
                            ₹
                            {Intl.NumberFormat("en-IN", {
                              maximumSignificantDigits: 3,
                            }).format(item?.amount)}
                          </span>
                          <div
                            className={` text-[0.635rem] rounded-md border ${
                              item?.type === "Expense"
                                ? "bg-red-50 text-red-600  border-red-20"
                                : "bg-green-50 text-green-600  border-green-20"
                            }0 px-2 py-[0.05rem] flex flex-row items-center gap-1`}
                          >
                            <span>
                              {item?.type === "Expense" ? "Expense" : "Income"}
                            </span>
                          </div>
                        </div>

                        {item?.type === "Expense" ? (
                          <FiArrowUpRight size={25} className="text-red-500" />
                        ) : (
                          <FiArrowDownLeft
                            size={25}
                            className="text-green-500"
                          />
                        )}
                      </div>
                      <hr />
                    </div>
                  );
                })}
            </div>
          </div>

          {/* information of transaction */}
          <div className="flex flex-col w-1/3  sticky top-14 gap-3">
            <span className="font-semibold">Overview</span>
            {/* <div className="flex flex-col overflow-hidden justify-center bg-white items-center gap-2 border border-slate-200 rounded-xl">
              <div className="flex flex-row justify-around  p-3 w-full ">
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
                className="w-full p-2 bg-slate-50 border-t hover:bg-green-500 hover:text-white"
              >
                <span className="text-sm">View Insights</span>
              </button>
            </div> */}

            <div className="flex-col flex overflow-hidden bg-white p-3 rounded-xl shadow-sm gap-2">
              <div className="flex-col flex">
                <span className="text-xs font-normal">Net balance</span>
                <span className="font-bold text-2xl">
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
              {/* <hr /> */}
              <div className="flex flex-row border rounded-xl items-center  overflow-hidden">
                <span className="text-xs  text-green-600 flex-1 p-2 text-center">
                  Total Income:{" "}
                  <b>
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
                  </b>
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-xs  text-red-600 flex-1 p-2 text-center">
                  Total Expenses:{" "}
                  <b>
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
                  </b>
                </span>
              </div>
            </div>

            <div className="text-sm font-semibold flex items-center gap-2 mx-2">
              {" "}
              <AiOutlineUnorderedList />
              <span>Category wise</span>
            </div>
            <div className="flex flex-col bg-white rounded-xl p-3 ">
              {[...categories].map((categoryItem: any, index: number) => (
                <div
                  key={index}
                  className="flex flex-row justify-between hover:bg-slate-50 rounded-lg cursor-pointer p-2"
                >
                  <span className="text-sm text-slate-500">{categoryItem}</span>

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
