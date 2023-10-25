import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "../reducers/counter";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { useState } from "react";

export default function ReduxTest() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);

  return (
    <section className="flex flex-col">
      {count}
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(decrement())}>감소</button>
      <input type="number" onChange={(e) => setNumber(+e.target.value)}></input>
      <button onClick={() => dispatch(incrementByAmount(number))}>
        {number}만큼 증가
      </button>
      <button onClick={() => dispatch(decrementByAmount(number))}>
        {number}만큼 감소
      </button>
    </section>
  );
}
