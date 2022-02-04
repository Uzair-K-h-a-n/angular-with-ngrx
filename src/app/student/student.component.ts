import { Component, OnInit } from '@angular/core';
import { Student } from "./student.model";
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import * as StudentListActions from './student-store/student.actions'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  students: Observable<any>;

  constructor(private store: Store<{ studentList: { students: Student[] } }>) { }

  ngOnInit(): void {
    this.students = this.store.select('studentList');
    this.store.select('studentList').subscribe()
  }

  addStudent(){
    this.store.dispatch(new StudentListActions.AddStudent({ id: 1, name:"ali", age:33}))
  }

  addStudents(){
    this.store.dispatch(new StudentListActions.AddStudents([{ id: 2, name:"abid", age:33}, { id: 3, name:"ahmed", age: 16}]))
  }

  updateStudent(){
    this.store.dispatch(new StudentListActions.UpdateStudent({ id: 1, student: { name:"Ali Abid", age:23 }}));
  }

  deleteStudent(){
    this.store.dispatch(new StudentListActions.DeleteStudent(3));
  }

}
