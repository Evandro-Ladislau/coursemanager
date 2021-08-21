import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CouserService } from "./course.service";

@Component({
  //selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  filteredCourse: Course[] = [];

  _courses: Course[] =[];

  _filterBy: string="";

  constructor (private courseService: CouserService){

  }

  ngOnInit(): void{
    this._courses = this.courseService.retrieveAll();
    this.filteredCourse = this._courses;
  }

  set filter(value: string){
      this._filterBy = value;

      this.filteredCourse = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
  }

  get filter(){
    return this._filterBy;
  }

}