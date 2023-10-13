import "./index.scss";

// eslint-disable-next-line react/prop-types
function Button({ onClick, children, disabled }) {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
