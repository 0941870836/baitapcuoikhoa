//async action 

import { courseService } from "../../Services";
import { createAction } from ".";
import { FETCH_COURSES } from "./type";

export const fetchCourses = () => {
    return (dispatch) => {
        courseService.fetchCourses()
            .then((res) => {
                dispatch(createAction(FETCH_COURSES, res.data));
            }).catch((err) => {
                console.log(err);
            })
    }
}