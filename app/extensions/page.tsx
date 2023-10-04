"use client";
import React, { useState } from "react";
import { AiOutlineMore } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";

import { TbApps } from "react-icons/tb";
import { HiOutlineDownload, HiOutlineStar, HiStar } from "react-icons/hi";
function Extensions() {
  const [serachQuestionString, setSerachQuestionString] = useState<string>();

  return (
    <main className="flex flex-col">
      {/* header */}
      <div className="flex bg-white items-center justify-center gap-10 p-4">
        <div
          className={`flex flex-row items-center  gap-2 hover:bg-neutral-100/40  font-bold`}
        >
          <span>
            <TbApps size={20} />
          </span>
          <span>{"Extensions"}</span>
        </div>
        {/* search bar */}
        <div className="flex-row flex flex-grow items-center justify-start gap-2 bg-slate-400/10 border-slate-100 border shadow-sm  p-3 rounded-md  ">
          <BiSearchAlt size={25} />
          <input
            type="text"
            placeholder="What help do you want? Just write here"
            value={serachQuestionString}
            onChange={(e) => setSerachQuestionString(e.target.value)}
            className="bg-transparent outline-none text-sm flex-1"
          />
        </div>
        {/* trailing action button */}
        <button className="border border-slate-300 p-2 rounded-full aspect-square">
          <AiOutlineMore />
        </button>
      </div>
      {/* Main Setion */}
      <div className="px-5 pt-5 grid grid-cols-3">
        {/* extension card */}

        <div className="flex items-start bg-white border p-2  rounded-lg gap-2">
          <div className="h-16 aspect-square bg-slate-100">INVT</div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold">Inventory Tracker</span>
            <span className="text-xs">Manage and Track Inventory at ease</span>
            <div className="flex gap-1 items-center">
              <HiOutlineDownload />
              <span className="text-xs">12,435</span>
              <span></span>

              <HiStar />
              <HiStar />
              <HiStar />
              <HiStar />
              <HiOutlineStar />
            </div>
          </div>
          <button className="px-4 flex items-center gap-1">
            <HiOutlineDownload />
            <span>Install</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Extensions;
