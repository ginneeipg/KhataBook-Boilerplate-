function TransactionBubble({ item }: { item: any }) {
  return (
    <div
      className={`flex items-start ${
        item?.isSent ? "flex-row-reverse" : "flex-row"
      } gap-2`}
    >
      {!item?.isSent && (
        <div className="rounded-full aspect-square bg-slate-300 w-10 flex flex-row items-center justify-center">
          KS
        </div>
      )}
      <div
        className={`flex flex-col w-1/3  
        
          gap-1`}
      >
        <div
          className={`flex flex-row ${
            item?.isSent ? "justify-end " : "justify-start "
          } gap-1  text-xs text-slate-600`}
        >
          <span>{item?.isSent ? "You" : item?.participant?.user_name}</span>
          {!item?.isSent&&<span>·</span>}
          <span>{!item?.isSent && item?.participant?.phone}</span>
        </div>
        <div className="rounded-xl bg-white  border p-3 flex flex-col cursor-pointer hover:shadow-md">
          <div className="flex flex-row items-center justify-between">
            <span className="text-xs">
              You {item?.isSent ? "gave" : "received"}
            </span>
            <span className="text-xs text-slate-400">
              {new Intl.DateTimeFormat("en-GB", {
                dateStyle: "medium",
                // timeStyle: "short",
              }).format(item?.date)}
            </span>
          </div>
          <span className="text-2xl font-semibold">${item?.amount}</span>
          <span className="text-sm py-1">{item?.description}</span>
        </div>
      </div>
    </div>
  );
}

export default TransactionBubble;
