import { useRef, useState } from "react";
import classes from "./Input.module.scss";

const TextInput = ({
  label,
  name,
  value,
  type,
  className,
  isInvalid,
  errorMSG,
  handleChange,
  handleBlur,
  handleClick,
  disabled,
  placeholder,
  prefix,
  suffix,
  autoComplete,
  readOnly,

  ...rest
}) => {
  const inputEl = useRef();
  const onFocus = () => inputEl.current.focus();
  const [show, setShow] = useState(false);

  return (
    <div className={`w-100 ${className ? className : ""}`} {...rest}>
      {label && <label className="mb-2  ms-1">{label}</label>}
      <div
        className={`d-flex align-items-center ${classes.wrapper} ${
          isInvalid ? classes.warning : ""
        } `}
        onClick={onFocus}
      >
        {prefix && <div className={classes.prefix}>{prefix}</div>}
        <input
          ref={inputEl}
          className={`w-100 border-0 ${disabled ? classes.disabled : ""}`}
          type={show ? "text" : type}
          name={name}
          placeholder={placeholder}
          value={value ?? ""}
          onChange={handleChange}
          onBlur={handleBlur}
          onClick={handleClick}
          disabled={disabled || false}
          readOnly={readOnly}
          autoComplete={autoComplete || "off"}
        />
        {suffix && (
          <div
            className={classes.suffix}
            onClick={() =>
              suffix === "show password" && setShow((state) => !state)
            }
          >
            {suffix}
          </div>
        )}
      </div>
      {isInvalid && <div className={classes.errorMSG}>შეცდომა</div>}
    </div>
  );
};

export default TextInput;
