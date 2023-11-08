import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const routes: Routes = [
  {
    path:'',redirectTo:'GetStarted',pathMatch:'full'
  },
  {
    path:'GetStarted',component:MainPageComponent
  },
  {
    path:"AddStudent",component:AddStudentComponent
  },
  {
    path:'AllStudents',component:AllStudentsComponent
  },
  {
    path:'ViewStudent/:admno',component:ViewStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
