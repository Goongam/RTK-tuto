import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  initialState,
  name: "counter",
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    //action.payload의 타입을 지정
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

//컴포넌트에서 사용할 함수 export
export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

//store에 저장하기 위한 reducer export
export default counterSlice.reducer;
