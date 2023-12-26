import { Component, ReactComponentElement } from "react";

interface ClassTextInputProps {
  label: string;
  inputProps: ReactComponentElement<'input'>
}

export class ClassTextInput extends Component<ClassTextInputProps> {
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
