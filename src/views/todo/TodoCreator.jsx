import propTypes from "prop-types";
import { Component } from "react";

export default class TodoCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItemText: "",
    };
  }

  /**
   * Hàm setState thành todo do người dùng nhập vào
   * @param {{target: {value: string}}} event
   */
  updateNewTextValue = (event) => {
    this.setState({
      newItemText: event.target.value,
    });
  };

  /**
   * Hàm tạo mới todo event sử dụng callBack lấy từ component cha
   */
  createNewTodoIfNotExist = () => {
    this.props.callBack(this.state.newItemText);
    this.setState({
      newItemText: "",
    });
  };
  render() {
    return (
      <div className="my-1">
        <input
          className="form-control"
          value={this.state.newItemText}
          type="text"
          onChange={this.updateNewTextValue}
        />
        <button
          className="btn btn-primary mt-1"
          onClick={this.createNewTodoIfNotExist}
        >
          Add
        </button>
      </div>
    );
  }
}

TodoCreator.propTypes = {
  callBack: propTypes.func,
};
