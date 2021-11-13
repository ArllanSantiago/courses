import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course/course-list.component';
import { NotFoundComponent } from './error/not-found.component';

const routes: Routes = [  
  {path:"" , redirectTo:'courses',pathMatch:"full" }
  ,{path:"courses", component: CourseListComponent, children:[]}
  ,{path:"**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
