"use client";

import Table from "@/Components/TableGenerator/Table";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { VscListFilter } from "react-icons/vsc";
function LeaderBook() {
  const [tabBarIndex, setTabBarIndex] = useState<number>(0);

  const columns = [
    {
      title: <span className="text-neutral-700">Transactions</span>,
      dataIndex: "User dckjnsdb",
      key: "name",
      headerClassName:"p-2 text-left",
      className: "p-2",
      render: (data: any) => {
        return <div className="">{data.userId}</div>;
      },
    },
  ];

  const transactionTableData = [
    {
      id: "abc",
      userId: "abcxyz",
      time_stamp: "12-08-23 13:09:43",
      reward_name: "COUPON100",
      status: "Redeemed",
      value_redeemed: 120,
      order_object:
        '{"entity":"event reward","webhook_type":"reward","payload":{"campaign_id":"12912f7a-5189-49fa-8997-1ec381816b17","campaign_type":"referral","custom_payload":{"EC":100},"customer_id":"75c49754-e12d-48d0-999c-7a6a0cdb31d4","redemption_date":"2023-05-02T09:18:12.998036675Z","redemption_id":"e75a98ee-1f6d-4ec1-8791-5e2142df87b2","referral_code":"PD-JSS72HM"},"app_id":"e2291ceb","client_id":"6fb61260-e9ce-4d4c-af17-eff636476654",}',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* navbar */}
      <div className="flex flex-row items-center p-2 justify-between bg-white gap-2">
        <div className="flex-row flex  items-center justify-start gap-2 bg-white border mr-auto dark:bg-zinc-800 px-2 py-1 rounded-md w-full sm:w-1/2 md:w-1/4     focus-within:flex-grow  focus-within: focus-within:ring-1 relative">
          <BiSearchAlt size={25} />
          <input
            type="text"
            placeholder="Search entry..."
            className="bg-transparent outline-none text-sm flex-1"
          />
        </div>

        <div className="rounded-full bg-slate-100 border  flex flex-row  text-sm">
          <div
            className={`rounded-full px-6 py-1 cursor-pointer ${
              tabBarIndex == 0 && "bg-green-500  text-white"
            }`}
            onClick={() => setTabBarIndex(0)}
          >
            <span>Income</span>
          </div>
          <div
            className={`rounded-full px-6 py-1 cursor-pointer ${
              tabBarIndex == 1 && "bg-green-500  text-white"
            }`}
            onClick={() => setTabBarIndex(1)}
          >
            <span>Expense</span>
          </div>
        </div>

        <button className="bg-slate-200 p-2 rounded-full">
          <VscListFilter />
        </button>
      </div>
      {/* main */}
      <div className="flex flex-row m-2 gap-2">
        {/* list of transaction */}
        <div className="flex-1 shadow-sm">
          <Table
            dataSource={transactionTableData}
            columns={columns}
            rowClassName="text-sm text-Neutral-500 "
          ></Table>
        </div>
        {/* information of transaction */}
        <div className="flex-col flex w-1/3 bg-white rounded-md p-2 shadow-sm">Information</div>
      </div>
    </div>
  );
}

export default LeaderBook;
