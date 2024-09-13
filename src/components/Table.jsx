import PropTypes from "prop-types";
export const EmployeeHeader = [
  {
    content: "EmployeeCode",
    id: "EmployeeCode",
    width: "w-3/12",
    format: (v) => <span className="text-blue-500">{v}</span>,
  },
  {
    content: "Fullname",
    id: "FullName",
    width: "w-3/12",
  },
  {
    content: "Gender",
    id: "Gender",
    width: "w-3/12",
    format: (v) =>
      v == 0 ? (
        <span className="bg-blue-400 px-3 py-1 rounded-xl">Male</span>
      ) : v == 1 ? (
        <span className="bg-green-400 px-3 py-1 rounded-xl">Female</span>
      ) : v == 2 ? (
        <span className="bg-red-400 px-3 py-1 rounded-xl">Other</span>
      ) : (
        <></>
      ),
  },
  {
    content: "DateOfBirth",
    id: "DateOfBirth",
    width: "w-3/12",
  },
];

CustomTable.propTypes = {
  // ...prop type definitions here
  datas: PropTypes.array,
  headers: PropTypes.array,
  isCheckBox: PropTypes.bool,
  className: PropTypes.string,
  isDeleted: PropTypes.bool,
  checkDetail: PropTypes.bool,
};

export default function CustomTable({
  datas = [],
  headers = [],
  isCheckBox = false,
  className = "",
  isDeleted = false,
  checkDetail = false,
}) {
  return (
    <div>
      <table className={`${className} border-collapse`}>
        <thead>
          <tr>
            {isCheckBox ? <th className="w-1/12"></th> : <></>}
            {headers.map((header) => (
              <th
                className={`${header?.width} overflow-clip px-3 py-1 border border-neutral-200`}
                key={header?.id}
              >
                {header?.content}
              </th>
            ))}
            {isDeleted || checkDetail ? <th className="px-3"></th> : <></>}
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr className="hover:bg-neutral-200" key={index}>
              {isCheckBox ? (
                <td>
                  <input type="checkbox" />
                </td>
              ) : (
                <></>
              )}
              {headers.map((header) => (
                <td
                  className="px-5 py-3 border-x border-neutral-200"
                  key={header?.id}
                >
                  {header?.format
                    ? header.format(data[header?.id])
                    : data[header?.id]}
                </td>
              ))}
              {isDeleted || checkDetail ? (
                <td className="px-5 py-3 border-x border-neutral-200">
                  <div className="flex gap-5">
                    {isDeleted ? (
                      <button className="text-white bg-red-500 px-3 py-1 rounded-md hover:bg-red-700">
                        Delete
                      </button>
                    ) : (
                      <></>
                    )}

                    {checkDetail ? (
                      <button className="text-white bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-700">
                        Detail
                      </button>
                    ) : (
                      <></>
                    )}
                  </div>
                </td>
              ) : (
                <></>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
