import { ComponentProps } from "react";

interface FunctionalTextInputProps {
  label: string;
  inputProps: ComponentProps<'input'>
}

export const FunctionalTextInput = ({ label, inputProps }: FunctionalTextInputProps) => {
  return (
    <div className="input-wrap">
      <label htmlFor="">{label}: </label>
      <input type="text" {...inputProps} />
    </div>
  );
};
