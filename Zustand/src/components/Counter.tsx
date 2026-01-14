import { useCounterStore } from "../store/counterStore";

function Counter() {
  const { count, increase, decrease, reset } = useCounterStore((state) => ({
    count: state.count,
    increase: state.increase,
    decrease: state.decrease,
    reset: state.reset,
  }));

  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default Counter;
