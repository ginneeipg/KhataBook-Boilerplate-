function UserTile({
  user,
  selected_user,
  onClick,
}: {
  user: any;
  selected_user: any;
  onClick: any;
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
        <span className="font-semibold">$3,780</span>
      </div>
      <hr />
    </div>
  );
}

export default UserTile;
