import { Component } from "react";
import propTypes from "prop-types";
export default class TodoBanner extends Component {
  constructor(
    props = {
      name: "",
      tasks: [],
    }
  ) {
    super(props);
  }
  render = () => (
    <h4 className="bg-primary text-white text-center p-2">
      {this.props.name}&apos; Todo list
      {this.props.tasks.filter((t) => !t.done).length} items to do
    </h4>
  );
}

TodoBanner.propTypes = {
  name: propTypes.string,
  tasks: propTypes.array,
};
