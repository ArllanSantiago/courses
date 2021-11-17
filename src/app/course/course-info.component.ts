import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl:"./course-info.component.html"
})
export class CourseInfoComponente implements OnInit {
    constructor(private courseServ: CourseService, private actRouter :ActivatedRoute){}
    course:Course = new Course()
    option = <string>this.actRouter.snapshot.paramMap.get('option')

    save(){
        this.courseServ.save(this.course);
        document.getElementById('back')?.click()
    }
    ngOnInit(){         
        const _course = <Course>this.courseServ.retrieveById(+(<string>this.actRouter.snapshot.paramMap.get("id")))
        this.course = _course? _course: new Course();
    }
}