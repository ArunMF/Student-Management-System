import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Student } from 'src/model/students';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit{
  courses:any=[];
  batches:any=[];
  students:Student={};
  constructor(private api:ApiService, private router:Router){
    this.students.courseid="Select Course";
    this.students.batchid="Select Batch";
  }
  ngOnInit(): void {
    this.api.getAllCourse().subscribe((data:any)=>{
      console.log(data);
      this.courses=data;
    })
    this.api.getAllBatch().subscribe((data:any)=>{
      console.log(data);
      this.batches=data;
    })
  }
  addStudent(){
    this.api.addStudent(this.students).subscribe((data:any)=>{
      this.router.navigateByUrl('');
    })
  }
}
