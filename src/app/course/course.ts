import { core } from "@angular/compiler";

export class Course {
    constructor(_course:Course = {
        id: -1
        , price: 0.00
        , code: ""
        , name: ""
        , imageUrl: ""
        , duration: 0
        , rating: 0
        , description: ""
        , releaseDate: new Date()
    }){
        this.id= _course.id;
        this.name=  _course.name? _course.name : "";
        this.imageUrl= _course.imageUrl?  _course.imageUrl: "";
        this.price= _course.price;
        this.code= _course.code;
        this.duration= _course.duration;
        this.rating= _course.rating;  
        this.description = _course.description;
        this.releaseDate = _course.releaseDate;
    }    
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    code: string;
    duration: number;
    rating: number;
    description:string;
    releaseDate:Date;
}