import React from "react";
import TodoRow from "./TodoRow";
import TodoBanner from "./TodoBanner";
import TodoCreator from "./TodoCreator";
import VisibilityControl from "./VisibilityControl";
export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Minh Đăng",
      todoItems: [
        { action: "Buy Flowers", done: false },
        { action: "Get Shoes", done: false },
        { action: "Collect Tickets", done: true },
        { action: "Call Joe", done: false },
      ],
      newItemText: "",
      showCompleted: true,
    };
  }

  // Gọi this.setState thì state sẽ thay đổi, component sẽ rerender
  changeStateData = () => {
    this.setState({
      ...this.state,
      userName: this.state.userName == "Minh Đăng" ? "MD" : "Minh Đăng",
    });
  };

  // Tạo mới new todo nếu chưa tồn tại
  createNewTodoIfNotExist = (task) => {
    if (task && !this.state.todoItems.find((item) => item.action === task)) {
      this.setState(
        {
          todoItems: [...this.state.todoItems, { action: task, done: false }],
          newItemText: "",
        },
        // Sử dụng cú pháp arrow function ngay trong setState để lấy luôn được state mới
        () => localStorage.setItem("todos", JSON.stringify(this.state)),
        () => console.log(this.state)
      );
      // Console.log ngay lập tức thì state chưa thay đổi
      // console.log(this.state.todoItems);
    }
  };

  /**
   * Hàm lấy Todo mới từ user gán vào state
   * @param {*} event
   */
  updateNewTextValue = (event) => {
    this.setState({
      newItemText: event.target.value,
    });
  };

  /**
   * Hàm đảo ngược trạng thái đã làm, chưa làm của todo item
   * @param {{action: string, done: boolean}} todo
   */
  toggleTodoState = (todo) =>
    this.setState({
      todoItems: this.state.todoItems?.map((item) =>
        item.action === todo.action
          ? {
              ...item,
              done: !item.done,
            }
          : item
      ),
    });

  todoTableRows = (doneValue) =>
    // Hàm array.map thực thi một function trên từng phần tử của mảng, trả về mảng mới ko làm thay đổi mảng ban đầu
    this.state.todoItems
      .filter((item) => item.done === doneValue)
      .map((item) => (
        <TodoRow
          key={item.action}
          item={item}
          callBack={this.toggleTodoState}
        />
      ));

  componentDidMount = () => {
    console.log("componentDidMount Message");
    let data = localStorage.getItem("todos");
    if (data) {
      this.setState(JSON.parse(data));
    }
  };

  componentDidUpdate() {
    console.log("componentDidUpdate Message");
  }

  render() {
    return (
      <div>
        <TodoBanner name={this.state.userName} tasks={this.state.todoItems} />
        <div className="container-fluid">
          <div className="my-1">
            <input
              type="form-control"
              value={this.state.newItemText}
              onChange={this.updateNewTextValue}
            />
          </div>
        </div>
        <button
          className="btn btn-primary m-2"
          onClick={this.createNewTodoIfNotExist}
        >
          Change
        </button>

        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{this.todoTableRows(false)}</tbody>
        </table>
        <div className="bg-secondary text-white text-center p-2">
          <VisibilityControl
            description="Completed Tasks"
            isChecked={this.state.showCompleted}
            callBack={(checked) => this.setState({ showCompleted: checked })}
          />
        </div>
        <div>
          {this.state.showCompleted && (
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Done</th>
                </tr>
              </thead>
              <tbody>{this.todoTableRows(true)}</tbody>
            </table>
          )}
        </div>
        <TodoCreator callBack={this.createNewTodoIfNotExist} />
      </div>
    );
  }
}
