export default function InputWithLabel({
  id,
  label,
  value,
  type = "text",
  onInputChange,
}) {
  return (
    <label htmlFor={id}>
      {label}
      <input type={type} id={id} value={value} onChange={onInputChange} />
    </label>
  );
}
