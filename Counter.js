export const Counter = ({
  count,
  countIncrement,
  countDecrement,
  countReset,
  initialCount,
}) => {
  return (
    <>
      <p>
        <b>{count}</b>
        <br />
        initial: <b>{initialCount}</b>
      </p>
      <button onClick={countIncrement}>inc</button>
      <button onClick={countDecrement}>dec</button>
      <button onClick={countReset}>re</button>
    </>
  );
};
