import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Student } from 'src/model/students';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit{
  allStudents:any=[];
  allCourses:any=[];
  courseId:any=[];
  allBatches: any=[];
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getAllStudents();
    this.getCourse();
    this.getBatch();
  }

  getAllStudents(){
    this.api.getAllStudents().subscribe((data:Student)=>{
      console.log(data);
      this.allStudents=data;
      console.log(this.allStudents);   
      // this.courseId=data.courseid;
      // console.log(this.courseId);
    })
  }

  getCourse(){
    this.api.getAllCourse().subscribe((data:any)=>{
      console.log(data);
      this.allCourses=data;
    })
  }

  getBatch(){
    this.api.getAllBatch().subscribe((data:any)=>{
      console.log(data);
      this.allBatches=data;
    })
  }
}
