import React from "react";

const InputWithLabel = ({
  id,
  type = "text",
  value,
  onInputChange,
  isFocused,
  children,
}) => {
  // const [searchTerm, setSearchTerm] = React.useState("");

  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  //   props.onSearch(event);
  // };

  const inputRef = React.useRef();
  React.useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id} className="label">
        {children}
      </label>
      <input
        className="input"
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
        // onChange={handleChange}
      />
      {/*<p>*/}
      {/*  Searching for <strong>{searchTerm}</strong>*/}
      {/*</p>*/}
    </>
  );
};

export default InputWithLabel;
