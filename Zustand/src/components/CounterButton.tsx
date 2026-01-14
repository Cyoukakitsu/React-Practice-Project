import { useCounterStore } from "../store/counterStore";

function CounterButton() {
  const increase = useCounterStore((state: any) => state.increase);
  const decrease = useCounterStore((state: any) => state.decrease);

  return (
    <>
      <div onClick={increase}>+</div>
      <div onClick={decrease}>-</div>
    </>
  );
}
export default CounterButton;
