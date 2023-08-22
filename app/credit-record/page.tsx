"use client";
import TransactionBubble from "@/components/TransactionBubble/TransactionBubble";
import UserTile from "@/components/UserTile/UserTile";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { AiOutlineMore } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { VscListFilter } from "react-icons/vsc";

function CreditRecord() {
  const [creditRecords, setCreditRecords] = useState<any>([]);
  const [people, setPeople] = useState<any>([]);
  const [searchString, setSearchString] = useState<string>("");
  const [filterRecordByUserId, setFilterRecordByUserId] = useState<any>();
  const [showAllTransactions, SetshowAllTransactions] = useState<boolean>(true);

  const [totalAmount, setTotalAmount] = useState<any[]>([]);

  useEffect(() => {
    getData();
    getPeople();
  }, []);

  useEffect(() => {
    getAccumulativeTotal();
  }, [people]);

  const getData = async () => {
    const res = await fetch("http://localhost:4000/credit_record");
    const items = await res.json();
    setCreditRecords(items);
  };

  const getPeople = async () => {
    const res = await fetch("http://localhost:4000/people");
    const items = await res.json();
    setPeople(items);
  };

  const getAcountedAmountByUser = (user: any) => {
    return (
      creditRecords

        .filter((item: any) => {
          return (
            item?.participant?.user_name === user?.user_name && item?.isSent
          );
        })
        .reduce((accumulator: any, currentValue: any) => {
          return accumulator + currentValue.amount;
        }, 0) -
      creditRecords

        .filter((item: any) => {
          return (
            item?.participant?.user_name === user?.user_name && !item?.isSent
          );
        })
        .reduce((accumulator: any, currentValue: any) => {
          return accumulator + currentValue.amount;
        }, 0)
    );
  };

  const getAccumulativeTotal = () => {
    setTotalAmount([
      ...people.map((user: any) => {
        return {
          id: user?.id,
          amount: getAcountedAmountByUser(user),
        };
      }),
    ]);
  };

  return (
    <div className="flex flex-row min-h-screen max-h-screen ">
      {/* left side bar */}
      <div className="flex-col flex  bg-white w-1/3 border-r ">
        <div className="flex-col flex gap-3 p-3">
          <div className="flex flex-row justify-between">
            <span className="font-bold text-xl">Credits</span>
          </div>
          <div className="flex-row flex  items-center justify-start gap-2 bg-slate-50 border p-2 rounded-md  ">
            <BiSearchAlt size={25} />
            <input
              type="text"
              placeholder="Search entry..."
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              className="bg-transparent outline-none text-sm flex-1"
            />
          </div>
          <div className="flex flex-col overflow-hidden justify-center items-center gap-2 border border-slate-200 rounded-xl">
            <div className="flex flex-row justify-around  p-3 w-full">
              <div className="flex-col flex items-center justify-center">
                <span className="text-sm font-semibold">You will give</span>
                <span className="font-bold text-red-500">
                  {totalAmount
                    .filter((item: any) => item.amount < 0)
                    .reduce(
                      (accumulator: any, currentVaule: any) =>
                        accumulator + currentVaule.amount,
                      0
                    )}
                </span>
              </div>
              <div className="flex-col flex items-center justify-center">
                <span className="text-sm font-semibold">You will receive</span>
                <span className="font-bold text-green-500">
                  {totalAmount
                    .filter((item: any) => item.amount > 0)
                    .reduce(
                      (accumulator: any, currentVaule: any) =>
                        accumulator + currentVaule.amount,
                      0
                    )}
                </span>
              </div>
              <div className="flex-col flex items-center justify-center">
                <span className="text-sm font-semibold">Net balance</span>
                <span className="font-bold text-green-500">
                  {totalAmount
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
                      )}
                </span>
              </div>
            </div>
            <button
              onClick={() => SetshowAllTransactions(true)}
              className="w-full p-2 bg-slate-100 hover:bg-slate-200"
            >
              <span className="text-sm">View all records</span>
            </button>
          </div>
        </div>
        {/* Customers */}
        <span className="text-sm px-3 pb-3">People</span>
        <hr />
        
          <div className="flex-col flex  overflow-y-auto">
            {people
              ?.filter(({ user_name }: { user_name: string }) =>
                user_name
                  ?.toLocaleLowerCase()
                  ?.includes(searchString.toLocaleLowerCase())
              )
              .map((user: any) => (
                <UserTile
                  key={user?.id}
                  user={user}
                  totalAmount={getAcountedAmountByUser(user)}
                  selected_user={filterRecordByUserId}
                  onClick={() => {
                    setFilterRecordByUserId(user);
                    SetshowAllTransactions(false);
                  }}
                />
              ))}
          </div>
      </div>
      {/* main content */}
      <div className="flex-col  flex flex-1">
        <div className="p-3 bg-white shadow-sm w-full gap-3 flex-row flex items-center justify-between">
          <div className="flex-col flex mr-auto">
            <span className="text-lg font-bold ">
              {showAllTransactions
                ? "All Records"
                : filterRecordByUserId?.user_name}
            </span>
            <div className="text-xs  flex gap-1">
              <span>{!showAllTransactions && filterRecordByUserId?.phone}</span>
              {!showAllTransactions && <span>•</span>}

              <span>
                {
                  creditRecords?.filter((item: any) => {
                    if (showAllTransactions) {
                      return true;
                    }

                    return (
                      item?.participant?.user_name ===
                      filterRecordByUserId?.user_name
                    );
                  })?.length
                }
              </span>
              <span>transactions</span>
            </div>
          </div>

          {!showAllTransactions && (
            <div className="flex-col flex items-center -gap-1 mx-5">
              <span className="text-xs">
                {getAcountedAmountByUser(filterRecordByUserId) === 0
                  ? "Settled"
                  : getAcountedAmountByUser(filterRecordByUserId) > 0
                  ? "You'll get"
                  : "You'll give"}
              </span>
              <span
                className={`font-semibold text-lg ${
                  getAcountedAmountByUser(filterRecordByUserId) >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                ${Math.abs(getAcountedAmountByUser(filterRecordByUserId))}
              </span>
            </div>
          )}

          <button className="border border-slate-300 p-2 rounded-full">
            <VscListFilter />
          </button>
          <button className="border border-slate-300 p-2 rounded-full">
            <AiOutlineMore />
          </button>
        </div>
        <div className="flex flex-col p-5  gap-5 overflow-y-auto">
          {creditRecords

            .filter((item: any) => {
              if (showAllTransactions) {
                return true;
              }

              return (
                item?.participant?.user_name === filterRecordByUserId?.user_name
              );
            })
            .map((item: any) => (
              <TransactionBubble key={item?.id} item={item} />
            ))}
        </div>
        <div className="flex px-5 flex-row-reverse">
          <button className="bg-green-500 font-semibold text-white rounded-full text-sm py-3 px-5 w-40">
            Add entry
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreditRecord;
