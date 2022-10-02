import {AppDispatch} from "@store/index";
import {useDispatch} from "react-redux";

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
