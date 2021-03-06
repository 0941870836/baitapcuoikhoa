import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from "react-redux";
import { courseService } from '../../Services';
import { createAction } from "../../Reduxs/Actions";
import { FETCH_COURSE_DETAIL } from '../../Reduxs/Actions/type';

class CourseDetailScreen extends Component {
    render() {
        return (
            <div>
                <img src={this.props.courseDetail.hinhAnh} alt="course detail" style={{ width: "200px", height: 280 }} />
                <h3>{this.props.courseDetail.tenKhoaHoc}</h3>
            </div>
        );
    }
    componentDidMount() {
        courseService.fetchCourseDetail()
            .then(res => {
                this.props.dispatch(createAction(FETCH_COURSE_DETAIL, res.data));

            }).catch(err => {
                console.log(err);
            });
    }
}

const mapStateToProps = (state) => ({
    courseDetail: state.course.courseDetail || {
        maKhoaHoc: '',
        tenKhoaHoc: '',
        hinhAnh: '',
        nguoiTao: {
            taiKhoan: '',
            hoTen: '',
        },
    }
});

export default connect(mapStateToProps)(CourseDetailScreen);