import { Component } from "react";
import propTypes from "prop-types";

export default class TodoRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <td>{this.props.item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={this.props.item.done}
            onChange={() => this.props.callBack(this.props.item)}
          />
        </td>
      </tr>
    );
  }
}

// Props validation
TodoRow.propTypes = {
  item: propTypes.shape({
    action: propTypes.string,
    done: propTypes.bool,
  }),
  callBack: propTypes.func,
};
