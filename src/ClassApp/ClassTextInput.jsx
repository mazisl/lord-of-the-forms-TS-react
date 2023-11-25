import { Component } from "react";

export class ClassTextInput extends Component {
  render() {
    const { label, inputProps } = this.props;

    return (
      <div className="input-wrap">
        <label htmlFor="">{label}: </label>
        <input type="text" {...inputProps} />
      </div>
    );
  }
}
