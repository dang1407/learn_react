import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Table } from "antd";
class EmployeeClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeData: [],
    };
  }

  fetchEmployeeData = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7027/api/v1/Employees?page=1&pageSize=20",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("PNTT-accessToken")}`,
          },
        }
      );
      for (let e of response.data.ModelData) {
        e["key"] = e.EmployeeId;
        e["action"] = e.EmployeeId;
      }
      this.setState({ employeeData: response.data.ModelData });
      console.log(); // In ra console
    } catch (error) {
      console.error("Có lỗi khi fetch dữ liệu:", error);
    }
  };

  UNSAFE_componentWillMount() {
    this.fetchEmployeeData();
  }
  render() {
    return (
      <div>
        <div>Đây là Employee Class Component</div>
        <NavLink to="/">Go to Home</NavLink>
        {this.state.employeeData && (
          <Table
            dataSource={this.state.employeeData}
            columns={[
              {
                title: "Mã nhân viên",
                dataIndex: "EmployeeCode",
                key: "EmployeeCode",
              },
              {
                title: "Họ và tên",
                dataIndex: "FullName",
                key: "FullName",
              },
              {
                title: "Địa chỉ",
                dataIndex: "Address",
                key: "Address",
              },
              {
                title: "Action",
                key: "action",
                dataIndex: "action",
                render: (text, record) => (
                  <div>
                    <button
                      onClick={() => {
                        console.warn("update", record);
                      }}
                    >
                      Update
                    </button>
                    <button
                      onClick={() => {
                        console.warn("delete", record);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ),
              },
            ]}
          ></Table>
        )}
      </div>
    );
  }
}

export default EmployeeClassComponent;
