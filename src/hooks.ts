import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { AppDispatch, RootState } from "./store";

type DispatchT = () => AppDispatch;

export const useCartDispatch: DispatchT = useDispatch;
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
