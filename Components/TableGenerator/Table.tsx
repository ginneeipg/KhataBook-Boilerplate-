export default function Table({
  dataSource,
  columns,
  rowClassName,
}: {
  dataSource?: any | undefined;
  columns?: any | undefined;
  rowClassName?: any | undefined;
}) {
  return (
    <div className="w-full cursor-default rounded-xl bg-white  font-lexend">
      <table className="w-full divide-y divide-gray-300 overflow-auto rounded-lg bg-white ">
        {/* <div className="w-full px-4"> */}
        <thead>
          <tr>
            {columns?.map((column: any, index: any) => (
              <th
                scope="col"
                className={`${column.headerClassName}`}
                key={"th" + index}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="min-w-min divide-y divide-gray-200 ">
          {dataSource?.map((dataRow: any, index: any) => (
            <tr key={"tr" + index} className={rowClassName}>
              {columns.map((column: any, index: any) => (
                <td className={`pr-3 ${column.className}`} key={"td" + index}>
                  {column?.render
                    ? column.render(dataRow)
                    : dataRow[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* </div> */}
      </table>
    </div>
  );
}
