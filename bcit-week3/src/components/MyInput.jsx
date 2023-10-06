export default function MyInput({ name, onChangeHandler }) {
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          onChangeHandler(e.target.value);
        }}
      />
    </>
  );
}
