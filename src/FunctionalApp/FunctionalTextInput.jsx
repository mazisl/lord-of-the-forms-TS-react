export const FunctionalTextInput = ({ label, inputProps }) => {
  return (
    <div className="input-wrap">
      <label htmlFor="">{label}: </label>
      <input type="text" {...inputProps} />
    </div>
  );
};
