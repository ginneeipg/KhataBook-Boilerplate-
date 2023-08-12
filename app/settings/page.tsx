"use client";
import { useParams, usePathname } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineSecurityScan, AiOutlineUser } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";

function SettingsScreen() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col p-5 gap-3">
      <span className="text-xl font-bold">Lorem, ipsum.</span>
      <div className="bg-white w-full rounded-xl flex-col flex">
        <span>settings</span>
      </div>
    </div>
  );
}

export default SettingsScreen;
