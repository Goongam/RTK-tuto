import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// counterReducer

//useSelector에서 사용할 callback의 인자 타입 -> reducer들의 타입을 return
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
