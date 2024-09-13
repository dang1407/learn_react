import propTypes from "prop-types";
import { Component } from "react";

export default class VisibilityControl extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-check">
        <input
          checked={this.props.isChecked}
          type="checkbox"
          className="form-check-input"
          onChange={(e) => this.props.callBack(e.target.checked)}
        />
        <label htmlFor="" className="form-check-label">
          Show {this.props.description}
        </label>
      </div>
    );
  }
}

VisibilityControl.propTypes = {
  callBack: propTypes.func,
  description: propTypes.string,
  isChecked: propTypes.bool,
};
