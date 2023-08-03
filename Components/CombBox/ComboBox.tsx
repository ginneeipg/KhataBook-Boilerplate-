"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "../ui/scroll-area";
import AddCategorySheet from "../SideSheet/AddCategorySheet";

export function ComboboxDemo({
  list,
  value,
  setValue,
}: {
  list: any[];
  value: any;
  setValue: any;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen} modal={true}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[21rem] justify-between"
        >
          {value
            ? list.find(
                (category: any) => category?.name.toLocaleLowerCase() === value
              )?.name
            : "Select category..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[21rem] p-0 bg-white">
        <Command>
          <CommandInput placeholder="Search categories..." />
          <CommandEmpty className="h-28 flex flex-col justify-center items-center ">
            <div className=" flex flex-col items-stretch w-full p-2 ">
              <div className="flex-col flex items-center justify-center">
                <span className="text-xl font-bold text-slate-400 ">
                  No Category found.
                </span>
                <span className="text-xs">No worries, just add a new one</span>
              </div>

              <div className="my-2"></div>
              <AddCategorySheet value={value} setValue={setValue}/>
            </div>
          </CommandEmpty>
          <CommandGroup>
            <ScrollArea className="h-60" type="always">
              {list.length <= 0 && (
                <div className=" flex flex-col items-stretch w-full p-2 ">
                  <div className="flex-col flex items-center justify-center">
                    <span className="text-xl font-bold text-slate-400 ">
                      No Category found.
                    </span>
                    <span className="text-xs">
                      No worries, just add a new one
                    </span>
                  </div>

                  <div className="my-2"></div>
                  <AddCategorySheet value={value} setValue={setValue}/>
                </div>
              )}
              {list.map((category: any) => (
                <CommandItem
                  key={category?.id}
                  onSelect={(currentValue: any) => {
                    setValue(
                      currentValue === value ? "" : currentValue
                      // currentValue
                    );
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === category?.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {category?.name}
                </CommandItem>
              ))}
            </ScrollArea>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

// <Dialog>
{
  /* <DialogTrigger>
<button className="bg-green-600 px-4 py-2 text-white rounded-md w-full text-sm">
  Add new category
</button>
</DialogTrigger>
<DialogContent>
<DialogHeader>Add new Category</DialogHeader>

<form
  onSubmit={(event: any) => {
    event.preventDefault();
    addCategory(event.target.category.value);
    setOpen(!open);
  }}
>
  <input
    type="text"
    name="category"
    placeholder="Category name"
    className="p-2 bg-slate-50 focus:ring-green-600 focus:ring-1 outline-none rounded-md"
  />
  {/** some inputs */
}
//   <button type="submit">Submit</button>
// </form>

// <DialogFooter>
//   <Button onClick={() => {}}>Save changes</Button>
// </DialogFooter>
// </DialogContent>
// </Dialog> */}
