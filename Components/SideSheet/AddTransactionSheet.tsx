"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Dropdown from "../DropDown/DropDown";
import { ComboboxDemo } from "../CombBox/ComboBox";
import { ScrollArea } from "../ui/scroll-area";
import { CommandSeparator } from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SidebarSheet({ open, setOpen }: { open: boolean; setOpen: any }) {
  //   const router = useRouter();
  const [openCategory, setOpenCategory] = useState(false);
  // const [open, setOpen] = useState(false);
  const [selectCategory, setselectCategory] = useState<any>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [transactionType, setTransactionType] = useState<string>("expense");
  const [showTransactionType, setShowTransactionType] = useState(false);
  const [amountInput, setAmountInput] = useState<number>(0);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<Date>();

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
  }, [selectCategory]);

  return (
    <Sheet open={open} onOpenChange={setOpen} defaultOpen={false}>
      <SheetTrigger className="bg-green-600 w-full text-white rounded-md p-2">
        Add Transaction
      </SheetTrigger>
      <SheetContent className="bg-white ">
        <div className="flex-col flex items-center min-h-screen  bg-white  gap-3 ">
          <div className=" max-w-sm overflow-hidden my-4  flex flex-col items-center">
            <span className="text-sm my-3">Enter Amount</span>

            <input
              type="number"
              placeholder="₹0"
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
          <div className="flex w-full gap-2">
            {/* Shadcn-ui */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`"w-[280px] justify-start text-left font-normal"
            ${!date && "text-muted-foreground"}
          `}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? (
                    <span>{date?.toDateString()}</span>
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  showOutsideDays={false}
                />
              </PopoverContent>
            </Popover>
            {/*  */}
            <div className="flex flex-col flex-1  items-stretch">
              <Select
                onValueChange={(val) => {
                  setTransactionType(val);
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={transactionType} />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value={"income"}>Income</SelectItem>
                  <SelectItem value={"expense"}>Expense</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <textarea
            name="text"
            id="jkbjk"
            className="w-full h-56 border p-2 rounded-md"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Write a short description about the transaction "
          ></textarea>

          <div className="mt-auto" />
          <button
            className="bg-green-600 w-full text-white rounded-md p-2"
            onClick={() => {
              handleSubmit({
                type: transactionType,
                amount: amountInput,
                description: description,
                categories: selectCategory,
                date: date?.getTime(),
              });
              setOpen(!open);
              setAmountInput(0);
              setselectCategory("");
              setTransactionType("expense");
              setDescription("");
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              console.log({
                type: transactionType,
                amount: amountInput,
                description: description,
                categories: selectCategory,
                date: date?.getTime(),
              });
              setAmountInput(0);
              setselectCategory("");
              setTransactionType("expense");
              setDescription("");
            }}
            className="bg-slate-300 text-slate-900 w-full rounded-md p-2"
          >
            Save & Add more
          </button>
          <div className="mt-10"></div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default SidebarSheet;
