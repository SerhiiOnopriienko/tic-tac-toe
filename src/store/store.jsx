import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reducers/gameSlice";
import chatSlice from "./reducers/chatSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    chat: chatSlice,
  },
});
