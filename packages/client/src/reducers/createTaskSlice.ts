import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Task } from "../types/types";

interface GenericState<T> {
  data?: T;
}
const initialState: GenericState<Task[]> = {
  data: [],
};

export const createTaskSlice = (type: string) => {
  const taskSlice = {
    name: type,
    initialState,
    reducers: {
      add(state: GenericState<Task[]>, action: PayloadAction<Task>) {
        state.data?.push(action.payload);
      },
      remove(state: GenericState<Task[]>, action: PayloadAction<string>) {
        state.data = state.data?.filter((i) => i.id !== action.payload);
      },
    },
  };

  return createSlice(taskSlice);
};
