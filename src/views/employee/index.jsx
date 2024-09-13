import { useAxios } from "@/hook/useAxios";
import EmployeeAPI from "./EmployeeAPI";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import CustomTable, { EmployeeHeader } from "@/components/Table";
import { NavLink } from "react-router-dom";

export default function Employee() {
  const { request } = useAxios();
  const { getEmployeesAsync } = EmployeeAPI();
  const [employeeData, setEmployeeData] = useState();
  // const [loadedData, setLoadedData] = useState(false);
  // const columns = [
  //   {
  //     title: "Mã nhân viên",
  //     dataIndex: "name",
  //     key: "EmployeeCode",
  //   },
  //   {
  //     title: "Họ và tên",
  //     dataIndex: "age",
  //     key: "FullName",
  //   },
  //   {
  //     title: "Địa chỉ",
  //     dataIndex: "address",
  //     key: "Addresss",
  //   },
  // ];
  const getEmpsAsync = useCallback(async () => {
    const empData = await getEmployeesAsync(request, 1, 20);
    console.log(empData);
    setEmployeeData(empData);
  }, [request, getEmployeesAsync]);

  // const printEmp = useCallback(() => console.log(employeeData), [employeeData]);

  useEffect(() => {
    getEmpsAsync();
  }, [getEmpsAsync]);

  return (
    <>
      <div>Đây là Employee Page</div>
      {employeeData ? (
        <CustomTable
          datas={employeeData?.ModelData}
          headers={EmployeeHeader}
          isCheckBox={true}
          className=""
          isDeleted={true}
          checkDetail={true}
        />
      ) : (
        <></>
      )}

      <NavLink to="/">Go to home</NavLink>
    </>
  );
}
