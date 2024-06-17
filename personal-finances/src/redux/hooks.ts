import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatcher } from "./store";

export const useAppDispatcher = useDispatch.withTypes<AppDispatcher>();

export const useAppSelector = useSelector.withTypes<RootState>();
