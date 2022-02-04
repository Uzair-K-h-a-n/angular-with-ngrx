import { Action } from "@ngrx/store";
import { Student } from "../student.model";

export const ADD_STUDENT = 'ADD_STUDENT';
export const ADD_STUDENTS = 'ADD_STUDENTS';
export const UPDATE_STUDENTS = 'UPDATE_STUDENTS';
export const DELETE_STUDENTS = 'DELETE_STUDENTS';

export class AddStudent implements Action {
    readonly type = ADD_STUDENT;
    constructor(public payload: Student) { } //public will create a payload property as well
}

export class AddStudents implements Action {
    readonly type = ADD_STUDENTS;
    constructor(public payload: Student[]) { }
}

export class UpdateStudent implements Action {
    readonly type = UPDATE_STUDENTS;
    constructor(public payload: { id: number, student: Student }) { }
}

export class DeleteStudent implements Action {
    readonly type = DELETE_STUDENTS;
    constructor(public payload: number) { }
}

export type StudentListActions = AddStudent | AddStudents | UpdateStudent | DeleteStudent;