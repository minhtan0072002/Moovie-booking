import { combineReducers } from "redux";
import carouselReducer from "./carousel/carouselReducer";
import quanLyPhimReducer from "./quan-ly-phim/quanLyPhimReducer";
import quanLyRapReducer from "./quan-ly-rap/quanLyRapReducer";
import quanLyNguoiDungReducer from "./quan-ly-nguoi-dung/quanLyNguoiDungReducer";
import messageSlice from './messageSlice';

const rootReducer = combineReducers({
  //chứa state ứng dụng
  messageSlice,
  carouselReducer,
  quanLyPhimReducer,
  quanLyRapReducer,
  quanLyNguoiDungReducer,
});

export default rootReducer;
