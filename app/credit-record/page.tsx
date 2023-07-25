import UserTile from "@/components/UserTile/UserTile";
import { Button } from "@/components/ui/button";
import { BiSearchAlt } from "react-icons/bi";

function CreditRecord() {
  return (
    <div className="flex flex-row">
      <div className="flex-col flex min-h-screen bg-slate-200 w-1/3 p-3 gap-3">
        <span className="font-bold text-xl">Credits</span>
        <div className="flex-row flex  items-center justify-start gap-2 bg-slate-50 border p-2 rounded-md  ">
          <BiSearchAlt size={25} />
          <input
            type="text"
            placeholder="Search entry..."
            className="bg-transparent outline-none text-sm flex-1"
          />
        </div>
        {/* Customers */}
        <span className="text-sm">Customers</span>
        <UserTile />
        <UserTile />
        <UserTile />
        <UserTile />
        <UserTile />
        <UserTile />
        <UserTile />
      </div>
      <div className="flex-col flex flex-1"></div>
    </div>
  );
}

export default CreditRecord;
