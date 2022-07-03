export const Hellow = ({ name, handleChangeName, initialName }) => {
  return (
    <>
      <p>
        hellow, <b>{name}</b>
        <br />
        name: <b>{initialName}</b>
      </p>
      <input type="text" onChange={handleChangeName} />
    </>
  );
};
