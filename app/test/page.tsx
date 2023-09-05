"use client";
import React, { useState } from "react";
import { AiOutlineMore } from "react-icons/ai";
import { VscListFilter } from "react-icons/vsc";

function TestScreen() {
  const object = {
    transaction: [
      {
        type: "income",
        amount: 48000,
        description: "Office salary from Newton.ai for Dec 2022",
        categories: "salary",
        date: 1672684200000,
        id: 1,
      },
      {
        type: "expense",
        amount: 3500,
        description: "Vivan's School fees for Oct 2022",
        categories: "education",
        date: 1667586600000,
        id: 2,
      },
      {
        type: "expense",
        amount: 3500,
        description: "Vivan's School fees for Nov 2022",
        categories: "education",
        date: 1670005800000,
        id: 3,
      },
      {
        type: "expense",
        amount: 6790,
        description: "For electricity bill from oct to dec",
        categories: "electricity",
        date: 1672857000000,
        id: 4,
      },
      {
        type: "income",
        amount: 48000,
        description: "Office salary for jan 2023",
        categories: "salary",
        date: 1677781800000,
        id: 5,
      },
      {
        type: "expense",
        amount: 8400,
        description: "For Car repairing and servicing ",
        categories: "car maintenance ",
        date: 1685989800000,
        id: 6,
      },
    ],
  };
  return (
    <div className="flex-row flex">
      <pre className="text-sm">{JSON.stringify(object, null, 3)}</pre>
    </div>
  );
}

export default TestScreen;
