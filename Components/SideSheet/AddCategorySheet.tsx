import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

function AddCategorySheet({value, setValue}:{value:any, setValue:any}) {
  const [category, setCategory] = useState<string>("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (data: any) => {
    fetch("http://localhost:4000/categories", {
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

    // console.log(JSON.stringify(category));

    setOpen(!open);
    setValue(data)
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="bg-green-600 w-full text-white rounded-md p-2">
        Add new category
      </SheetTrigger>
      <SheetContent className="bg-white pt-10">
        <div className="flex flex-col bg-white gap-3">
          <span className="text-2xl font-semibold">
            Add a new <br />{" "}
            <span className="font-bold text-green-500 text-3xl">Category</span>{" "}
          </span>
          <input
            type="text"
            placeholder="Add new category"
            onChange={(e: any) => setCategory(e.target.value)}
            className="border p-2 rounded-lg focus:ring-1 ring-0 focus:ring-green-500 outline-none"
          />
          <button
            onClick={() =>
              handleSubmit({ name: category?.toLocaleLowerCase() })
            }
            className="bg-green-600 text-white p-2 rounded-lg  border-none"
          >
            Add
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default AddCategorySheet;
