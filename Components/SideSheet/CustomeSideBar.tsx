import React, { useEffect, useState } from "react";
import { ComboboxDemo } from "../CombBox/ComboBox";
import { FiChevronDown } from "react-icons/fi";

function CustomeSideBar({
  openSheet,
  onClose,
  className,
}: {
  className: string;
  openSheet: boolean;
  onClose: any;
}) {
  const [selectCategory, setselectCategory] = useState<string>("");

  const [transactionType, setTransactionType] = useState<string>("Income");
  const [showTransactionType, setShowTransactionType] =
    useState<boolean>(false);
  const [amountInput, setAmountInput] = useState<number>();
  const [description, setDescription] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);

  const handleSubmit = (data: any) => {
    fetch("http://localhost:4000/transaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        // Handle the response data
        console.log("PUT request successful", responseData);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error making PUT request:", error);
      });
  };

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch(
        "http://localhost:4000/categories?_page=1&_limit=30"
      );
      if (res.status === 200) {
        const data = await res.json();
        setCategories(data);
      }
    };
    getCategories();
  }, []);

  return (
    openSheet && (
      <div className={`flex flex-row ${className}`}>
        <div className="flex-1 bg-black/30"></div>
        {openSheet && (
          <div className="w-1/3 flex-col flex bg-white animate-slide-to-left">
            <div className="flex">
              <button onClick={onClose}>X</button>
            </div>
            <div className="flex-col flex items-center  gap-3 ">
              <div className=" overflow-hidden my-4  flex flex-col items-center">
                <span className="text-sm my-3">Enter Amount</span>

                <input
                  type="number"
                  placeholder="$0"
                  value={amountInput}
                  onChange={(e) => setAmountInput(e.target.valueAsNumber)}
                  autoFocus
                  className=" text-5xl  text-center focus ring-0 outline-none"
                />
              </div>
              {/* Category */}

              <ComboboxDemo
                list={categories}
                value={selectCategory}
                setValue={setselectCategory}
              />

              {/* Date time */}
              <div className="flex  gap-2">
                <button
                  className="border flex-1 rounded-md p-2"
                  // onClick={() => setOpenSelectList(!openSelectList)}
                >
                  Date
                </button>
                <div className="flex flex-col flex-1  items-stretch">
                  <button
                    className="border rounded-md p-2 flex justify-between items-center gap-5"
                    onClick={() => setShowTransactionType(!showTransactionType)}
                  >
                    <span>{transactionType}</span>
                    <FiChevronDown size={20} />
                  </button>
                  {showTransactionType && (
                    <div className="absolute top-[16.8rem] bg-slate-50 flex-col flex overflow-hidden rounded-md border  gap-2 p-2">
                      {["Income", "Expense"].map((item: string) => (
                        <option
                          className=" text-left"
                          onClick={() => {
                            setTransactionType(item);
                            setShowTransactionType(!showTransactionType);
                          }}
                        >
                          {item}
                        </option>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <textarea
                name="text"
                id="jkbjk"
                className=" h-56 border p-2 rounded-md"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="Write a short description about the transaction "
              ></textarea>

              <div className="mt-auto" />
              <button
                className="bg-green-600  text-white rounded-md p-2"
                onClick={() => {
                  handleSubmit({
                    type: transactionType,
                    amount: amountInput,
                    description: description,
                    categories: selectCategory,
                    date: Date.now(),
                  });
                }}
              >
                Save
              </button>
              <button className="bg-slate-300 text-slate-900  rounded-md p-2">
                Save & Add more
              </button>
              <div className="mt-10"></div>
            </div>
          </div>
        )}
      </div>
    )
  );
}

export default CustomeSideBar;
