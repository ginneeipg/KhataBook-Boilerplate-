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
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";

export function ComboboxDemo({
  list,
  value,
  setValue,
}: {
  list: string[];
  value: string;
  setValue: any;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[21rem] justify-between"
        >
          {value
            ? list.find(
                (category: string) => category.toLocaleLowerCase() === value
              )
            : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[21rem] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty className="h-28 flex flex-col justify-center items-center ">
            <div className=" flex flex-col items-center ">
              <span className="text-xl font-bold text-slate-400 ">
                No Category found.
              </span>
              <span className="text-xs">No worries, just add a new one</span>
              <div className="my-2"></div>
              <Dialog>
                <DialogTrigger >
                  <button>Add new category</button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>Add new Category</DialogHeader>
                  
                  <input type="text" placeholder="Category" />
                  <DialogFooter>
                    <button>Cancel</button>
                    <button>Add</button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CommandEmpty>
          <CommandGroup>
            <ScrollArea className="h-72">
              {list.map((category: string) => (
                <CommandItem
                  key={category}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === category ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {category}
                </CommandItem>
              ))}
            </ScrollArea>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
