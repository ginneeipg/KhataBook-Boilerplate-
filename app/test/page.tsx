"use client";
import React, { useState } from "react";
import { AiOutlineMore } from "react-icons/ai";
import { VscListFilter } from "react-icons/vsc";

function TestScreen() {
  const [tabIndex, setTabIndex] = useState<any>(0);
  return (
    <div className="flex-row flex">
     
      {/* Sidebar-insight */}
      <div className="flex-col flex bg-white min-h-screen w-1/3">
        <div className="flex-col flex p-3">
          <span className="font-bold">Ledgerbook</span>
        </div>

        <div className="flex flex-col overflow-hidden justify-center items-center gap-2 border m-3 border-slate-200 rounded-xl">
          <div className="flex flex-row justify-around  p-3 w-full">
            <div className="flex-col flex items-center justify-center">
              <span className="text-sm font-semibold">Total Income</span>
              <span className="font-bold text-red-500">
                {/* {totalAmount
                    .filter((item: any) => item.amount < 0)
                    .reduce(
                      (accumulator: any, currentVaule: any) =>
                        accumulator + currentVaule.amount,
                      0
                    )} */}
                7667
              </span>
            </div>
            <div className="flex-col flex items-center justify-center">
              <span className="text-sm font-semibold">Total Expense</span>
              <span className="font-bold text-green-500">
                {/* {totalAmount
                    .filter((item: any) => item.amount > 0)
                    .reduce(
                      (accumulator: any, currentVaule: any) =>
                        accumulator + currentVaule.amount,
                      0
                    )} */}
                76757
              </span>
            </div>
            <div className="flex-col flex items-center justify-center">
              <span className="text-sm font-semibold">Net balance</span>
              <span className="font-bold text-green-500">
                {/* {totalAmount
                    .filter((item: any) => item.amount < 0)
                    .reduce(
                      (accumulator: any, currentVaule: any) =>
                        accumulator + currentVaule.amount,
                      0
                    ) +
                    totalAmount
                      .filter((item: any) => item.amount > 0)
                      .reduce(
                        (accumulator: any, currentVaule: any) =>
                          accumulator + currentVaule.amount,
                        0
                      )} */}
                7876
              </span>
            </div>
          </div>
          <button
            //   onClick={() => SetshowAllTransactions(true)}
            className="w-full p-2 bg-slate-100 hover:bg-slate-200"
          >
            <span className="text-sm">View all records</span>
          </button>
        </div>

        <span className="text-sm mx-3 mb-3">Transaction category wise</span>

        <hr />

        {[
          "Food",
          "Transportation",
          "Outing",
          "Grocery",
          "Movie",
          "Education",
          "Electricity",
          "Rent",
          "Health-care",
        ].map((item: any, index: number) => (
          <div key={index} className="flex-col flex  cursor-pointer">
            <div
              className={`flex-row flex py-3 pl-3 pr-5 gap-2 items-center hover:bg-slate-50 `}
            >
              <div className="w-12 aspect-square  flex items-center justify-center bg-neutral-200 rounded-full">
                {item?.substring(0, 1)}
              </div>
              <div className="flex-col flex flex-1 gap-1">
                <span className="font-semibold text-sm">{item}</span>
                <span className="text-xs">23 transaction</span>
              </div>
              <div className="flex-col flex items-center gap-1">
                <span className="text-xs">Total spent</span>
                <span className={`font-semibold text-sm`}>76823</span>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
       {/* main-content */}
       <div className="flex-1 flex-col flex border-l">
        <div className="p-3 bg-white border-b w-full gap-3 flex-row flex px-8 items-center justify-between">
          <div className="flex-col flex mr-auto">
            <span className=" font-semibold">All Transactions</span>
            <span className="text-xs">564 Transactions</span>
          </div>
          <button className="border border-slate-300 p-2 rounded-full">
            <VscListFilter />
          </button>
          <button className="border border-slate-300 p-2 rounded-full">
            <AiOutlineMore />
          </button>
        </div>
        <div className="flex flex-col mx-5">
          {[1, 2, 3, 4, 5, 6, 7, 34, 65, 57, 23, 36, 45, 30, 56, 89, 68].map(
            (item: any) => (
              <div key={item} className="flex-col flex  cursor-pointer">
                <div
                  className={`flex-row flex py-3 pl-3 pr-5 gap-5 items-center hover:bg-slate-50 bg-white `}
                >
                  <div className="flex-col flex flex-1 gap-1">
                    <span className=" text-sm">
                      Chicken Biryani Combo- office lunch
                    </span>
                   
                  </div>
                  <span className="text-xs">23 Jul, 2023</span>
                      <span className="text-xs">Category</span>

                  <span className={`font-semibold text-sm text-red-500`}>
                    $823.00
                  </span>
                </div>
                <hr />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default TestScreen;
