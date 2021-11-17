import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseInfoComponente } from './course/course-info.component';
import { CourseListComponent } from './course/course-list.component';
import { NotFoundComponent } from './error/not-found.component';

const routes: Routes = [
  { path: "", redirectTo: 'courses', pathMatch: "full" }
  , { path: "courses/info/:id/:option", component: CourseInfoComponente }
  , {
    path: "courses"
    , component: CourseListComponent
    /*, children: [
      { 
        path: "info"
        , component: CourseInfoComponente }
    ]*/
  }
  , { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
