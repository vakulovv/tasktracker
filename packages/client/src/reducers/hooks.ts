import { useDispatch as dispatchHook } from "react-redux";
import { type AppDispatch } from "store";

type DispatchFunc = () => AppDispatch;
export const useDispatch: DispatchFunc = dispatchHook;

export const useAppDispatch: () => AppDispatch = useDispatch;
