interface ErrMsgProps {
  message: string
}

export const ErrorMessage = ({ message }: ErrMsgProps):JSX.Element => {
  return <div className="error-message">{message}</div>;
};
