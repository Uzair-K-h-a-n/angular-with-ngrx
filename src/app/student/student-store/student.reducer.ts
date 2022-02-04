import { Action } from "@ngrx/store";
import * as StudentActions from "./student.actions";

const initialState = {
    students: [
        {id: 1, name: "uzair", age: 19},
        {id: 2, name: "fahad", age: 21}
    ] 
}

export function studentReducer(state = initialState, action: any){
    switch(action.type){
        case StudentActions.ADD_STUDENT:
            return {
                ...state,
                students: [...state.students, action.payload]
            };
        case StudentActions.ADD_STUDENTS:
            return {
                ...state,
                students: [...state.students, ...action.payload]
            };
        case StudentActions.UPDATE_STUDENTS:
            return {
                ...state,
                students: state.students.map(student => {
                    if(student.id === action.payload.id){
                        return { 
                            id: action.payload.id,
                            ...action.payload.student
                        }
                    }else{
                        return student;
                    }
                })
            };
        case StudentActions.DELETE_STUDENTS:
            return {
                ...state,
                students: state.students.filter(student => {return student.id != action.payload})
            };
        default:
            return state;
    }
}  