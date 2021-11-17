import { Injectable } from "@angular/core";
import { Course } from "./course";

@Injectable({
    providedIn: 'root'
})
export  class CourseService{
    retrieveAll(): Course[]{
        return COURSES
    }
    retrieveById(_id:number):Course | undefined{
        return COURSES.find((c:Course) => c.id === _id);
    }
    courseIndex(course:Course): number{
        return COURSES.findIndex((c:Course)=> c.id == course.id)
    }
    save(course:Course){                
        if (course.id > -1){
            COURSES[this.courseIndex(course)] = course            
        }else{            
            course.id = COURSES.length> 0? COURSES.map(c => c.id).reduce((a,b)=> Math.max(a,b)): 0
            COURSES.push(course)
        }
    }

    delete(_id: number){
       COURSES = COURSES.filter(c => c.id != _id) 
    }
}
var _id:number = 1
var COURSES:Course[] =[
    new Course({id:_id++,code:"TBV-991" ,releaseDate: new Date('2020-01-02T00:00:00') ,duration:36,imageUrl:"/assets/img/AngularCourse.png",name:"Lest'Go Angular",price:150.92,rating:4.8 ,description:"Esse curso irá abordar da melhor maneira metodo e funções encontradas no Angular"})
    ,new Course({id:_id++,code:"SVB-038",releaseDate: new Date('2020-01-02T00:00:00') ,duration:36,imageUrl:"/assets/img/springbootCourse.jpg",name:"Lest'Go Java SprintBoot",price:80.12,rating:2.6 ,description:"Esse curso irá abordar da melhor maneira metodo e funções encontradas no Java"})
    ,new Course({id:_id++,code:"TFG-908",releaseDate: new Date('2020-01-02T00:00:00') ,duration:36,imageUrl:"/assets/img/CShapCourse.png",name:"Lest'Go C#",price:90.02,rating:5.0 ,description:"Esse curso irá abordar da melhor maneira metodo e funções encontradas no CShap"})
    ,new Course({id:_id++,code:"SGS-546",releaseDate: new Date('2020-01-02T00:00:00') ,duration:36,imageUrl:"/assets/img/ReactNativeCourse.png",name:"Lest'Go ReactNative",price:250.00,rating:3.5 ,description:"Esse curso irá abordar da melhor maneira metodo e funções encontradas no ReactNative"})
    ,new Course({id:_id++,code:"BZD-698",releaseDate: new Date('2020-01-02T00:00:00') ,duration:36,imageUrl:"/assets/img/htmlCourse.png",name:"Lest'Go HTML5/CSS3",price:50.03,rating:2.75, description:"Esse curso irá abordar da melhor maneira metodo e funções encontradas no Html"})
    ,new Course({id:_id++,code:"BXC-987",releaseDate: new Date('2020-01-02T00:00:00') ,duration:36,imageUrl:"/assets/img/NodeCourse.png",name:"Lest'Go Node",price:50.03,rating:2.75, description:"Esse curso irá abordar da melhor maneira metodo e funções encontradas no Node"})
]