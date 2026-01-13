import { useCounterStore } from "../store/counterStore";

function CounterButton() {
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);

  return (
    <>
      <div onClick={increase}>+</div>
      <div onClick={decrease}>-</div>
    </>
  );
}
export default CounterButton;
