import { Sheet } from "lucide-react";
import React from "react";
import { SheetContent, SheetTrigger } from "../ui/sheet";

function AddCategorySheet() {
  return (
    <Sheet>
      <SheetTrigger className="bg-green-600 w-full text-white rounded-md p-2">
        Add new category
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Add new category"
            className="border"
          />
          <button className="bg-green-600 text-white">Add</button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default AddCategorySheet;
