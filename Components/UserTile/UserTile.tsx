
function UserTile() {
  return (
    <div className="flex-row flex gap-2">
    <div className="w-12 aspect-square  flex items-center justify-center bg-neutral-300 rounded-full">N</div>
    <div className="flex-col flex flex-1">
      <span className="font-semibold">Name</span>
      <span className="text-sm">91982376487</span>
    </div>
      <span className="font-semibold">$3,780</span>
  </div>
  )
}

export default UserTile