export const Input = ({ name, label, type, value, onChange }) => {
  return (
    <>
      <div>
        <label>{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};