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
        {/* <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
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
        </Command> */}
         <ScrollArea className="h-72  rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
              {list.map((tag) => (
                <React.Fragment>
                  <div className="text-sm" key={tag}>
                    {tag}
                  </div>
                  {/* <CommandSeparator cla */}
                </React.Fragment>
              ))}
            </div>
          </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
