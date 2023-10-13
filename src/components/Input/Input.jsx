import { useId } from "react";
import "./index.scss";

// eslint-disable-next-line react/prop-types
function Input({ label, value, onChange }) {
  const id = useId();

  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input id={id} value={value} onChange={onChange} />
    </div>
  );
}

export default Input;
