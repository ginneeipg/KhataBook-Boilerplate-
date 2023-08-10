"use client";
import HelpQuestionCard from "@/components/HelpQuestionCard/HelpQuestionCard";
import React, { useState } from "react";
import { AiFillCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";

function HelpScreen() {
  const [serachQuestionString, setSerachQuestionString] = useState<string>();
  const [upbit, setUpbit] = useState<boolean>();
  return (
    <div className="flex flex-col">
      {/* header */}
      <div className="flex-col flex bg-white p-5 gap-3 shadow-md ">
        <div className="flex flex-row items-center justify-between">
          <span className="text-2xl font-bold">Welcome to help center</span>
          <button className="bg-green-500 text-green-50 py-1 px-3 rounded-lg">
            Add a new question
          </button>
        </div>
        {/* <span className="texts-sm text-slate-500"># </span> */}
        <div className="flex-row flex  items-center justify-start gap-2 bg-slate-400/10 border-slate-100 border shadow-sm  p-3 rounded-md  ">
          <BiSearchAlt size={25} />
          <input
            type="text"
            placeholder="What help do you want? Just write here"
            value={serachQuestionString}
            onChange={(e) => setSerachQuestionString(e.target.value)}
            className="bg-transparent outline-none text-sm flex-1"
          />
        </div>
      </div>
      {/* body */}
      <div className="flex flex-col h-[42.5rem] px-5 mt-1 gap-2 overflow-y-auto">
        <HelpQuestionCard />
        <HelpQuestionCard />
        <HelpQuestionCard />
        <HelpQuestionCard />
        <HelpQuestionCard />
        <HelpQuestionCard />
        <HelpQuestionCard />
        <HelpQuestionCard />
        <HelpQuestionCard />
      </div>
    </div>
  );
}

export default HelpScreen;
