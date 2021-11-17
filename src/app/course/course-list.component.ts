import { Component, OnInit } from '@angular/core';
import {Course} from './course';
import { CourseService } from './course.service';



@Component({
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  constructor(private courseServ: CourseService) { }
  _courses:Course[] = [];
  _filteredCourses:Course[] = [];
  _filterBy: string = "";
  delete(id:number){
    this.courseServ.delete(id)
    this.ngOnInit()
  }
  ngOnInit(): void {
    this._courses = this.courseServ.retrieveAll()
    this._filteredCourses = this._courses
  }
  set filter(value:string){
    this._filterBy= value;
    this._filteredCourses = this._courses.filter((course:Course) => course.name.toLowerCase().indexOf(value.toLowerCase())>-1)
  }
  get filter(){
    return this._filterBy;
  }
}
