import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'replace'
})
export class ReplacePipe implements PipeTransform{
    transform(value: string, oldChar : string, newChar:string ) {
       return value.replace(oldChar,newChar);
    }
}