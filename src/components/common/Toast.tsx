export const Toast = ({ message }: { message: string }) => {
  return (
    <div className="toast">
      <div className="alert alert-info">
        <span>{message}</span>
      </div>
    </div>
  );
};
export const ToastError = ({ message }: { message: string }) => {
  return (
    <div className="toast">
      <div className="alert alert-error">
        <span>{message}</span>
      </div>
    </div>
  );
};
export const ToastWarning = ({ message }: { message: string }) => {
  return (
    <div className="toast">
      <div className="alert alert-warning">
        <span>{message}</span>
      </div>
    </div>
  );
};
