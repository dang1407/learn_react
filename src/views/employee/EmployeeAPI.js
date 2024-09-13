async function getEmployeesAsync(request, page, pageSize, searchProperty) {
  let url = `Employees?page=${page}&pageSize=${pageSize}`;
  if (searchProperty) {
    url += `&searchProperty=${searchProperty}`;
  }
  return await request({
    url,
    method: "GET",
  });
}

export default function EmployeeAPI() {
  return {
    getEmployeesAsync,
  };
}
