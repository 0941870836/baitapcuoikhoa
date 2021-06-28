import Axios from "axios";
import * as yup from "yup";

export const signupUserSchema = yup.object().shape({
    taiKhoan: yup.string().required('*Yêu cầu nhập tài khoản!'),
    matKhau: yup.string().required('*Yêu cầu nhập mật khẩu!'),
    hoTen: yup.string().required('*Yêu cầu nhập họ tên!'),
    email: yup.string().required('*Yêu cầu nhập email!').email('*Email không hợp lệ!'),
    soDT: yup.string().required('*Yêu cầu nhập số điện thoại!').matches(/^[0-9]+$/),
    maNhom: yup.string().required('*Yêu cầu chọn mã nhóm!'),
});

class UserService {
    signUp(data) {
        return Axios({
            method: "POST",
            url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data
        })
    }
}
export default UserService;