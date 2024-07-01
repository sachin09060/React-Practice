export const Input = ({ name, label, type, value, onChange }) => {
  return (
    <>
      <div>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};
