import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Batch } from 'src/model/batches';
import { Course } from 'src/model/courses';
import { Student } from 'src/model/students';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // API call for get all students
  getAllStudents():Observable<Student>{
    return this.http.get('http://localhost:3000/students');
  }

  // API call for get all course name
  getAllCourse():Observable<Course>{
    return this.http.get('http://localhost:3000/courses');
  }

  // API call for get all batches
  getAllBatch():Observable<Batch>{
    return this.http.get('http://localhost:3000/batches');
  }

  viewStudent(AdmNo:string){
    return this.http.get(`http://localhost:3000/students/${AdmNo}`)
  }

  // API call for get particular course name
  getCourse(CourseId:string){
    return this.http.get(`http://localhost:3000/courses/${CourseId}`);
  }

  // API call for get particular batch
  getBatch(BatchId:string){
    return this.http.get(`http://localhost:3000/batches/${BatchId}`);
  }

  // API call for add new student
  addStudent(studentBody:any){
    return this.http.post('http://localhost:3000/students',studentBody)
  }
}
