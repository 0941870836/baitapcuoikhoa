import React, { Component } from 'react';
import CourseItem from '../../Components/Courseitems';
import { connect } from "react-redux";
import { fetchCourses } from '../../Reduxs/Actions/user';

class HomeScreen extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4 text-center">Danh sach khoa hoc</h1>
                <div className="container">
                    <div className="row">
                        {
                            this.props.courseList.map((item, index) => <div className="col-3">
                                <CourseItem item={item} />
                            </div>)
                        }
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.dispatch(fetchCourses())
    }
}

const mapStateToProps = (state) => ({
    courseList: state.course.courses
});
export default connect(mapStateToProps)(HomeScreen);