import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit{
  admno:string='';
  student:any=[];
  courseId:string='';
  courseName:string='';
  batchId:string='';
  batch:string='';
  constructor(private activateroute:ActivatedRoute,private api:ApiService){}
  ngOnInit(): void {
    this.activateroute.params.subscribe((data:any)=>{
      console.log(data);
      this.admno=data.admno;

      this.api.viewStudent(this.admno).subscribe((data:any)=>{
        console.log(data);
        this.student=data;
        this.courseId=data.courseid;
        this.batchId=data.batchid;

        this.api.getCourse(this.courseId).subscribe((data:any)=>{
          console.log(data);
          this.courseName=data.name;

        this.api.getBatch(this.batchId).subscribe((data:any)=>{
          console.log(data);
          this.batch=data.name;
        })
        })
      })
    })
  }
}
