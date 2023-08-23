import { amountWithComma } from "@/helperFunction/formater";

function UserTile({
  user,
  selected_user,
  onClick,
  totalAmount,
}: {
  user: any;
  selected_user: any;
  onClick: any;
  totalAmount: number;
}) {
  return (
    <div className="flex-col flex  cursor-pointer" onClick={onClick}>
      <div
        className={`flex-row flex py-3 pl-3 pr-5 gap-2 items-center hover:bg-slate-50 ${
          user === selected_user && "bg-slate-50"
        }`}
      >
        <div className="w-12 aspect-square  flex items-center justify-center bg-neutral-200 rounded-full">
          {user?.user_name?.substring(0, 1)}
        </div>
        <div className="flex-col flex flex-1 gap-1">
          <span className="font-semibold text-sm">{user?.user_name}</span>
          <span className="text-xs">{user?.phone}</span>
        </div>

        <div className="flex-col flex items-center gap-1  ">
          <span className="font-medium ">
            ₹{amountWithComma(Math.abs(totalAmount))}
          </span>
          <div
            className={` text-[0.635rem] rounded-md border
            ${
              totalAmount === 0
                ? "text-black"
                : totalAmount > 0
                ? "bg-green-50 text-green-600  border-green-20"
                : "bg-red-50 text-red-600  border-red-20"
            }
            }0 px-2 py-[0.05rem] flex flex-row items-center gap-1`}
          >
            <span>
              {totalAmount === 0
                ? "Settled"
                : totalAmount > 0
                ? "You'll get"
                : "You'll give"}
            </span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default UserTile;
