import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export default class StudentService {
  students = [];
  private customerUrl = 'http://localhost:3000/api/customers';
  constructor(private http: HttpClient) { 
    var defstudents = [
      {
        rollno:'1', 
        firstName:'Athira', 
        lastName:'B',
        dob:'7/02/1990', 
        class :'tenth', 
        subject:'Physics', 
        teacher:'Prema',
        address:'India'
      },

      {
        rollno:'2', 
        firstName:'Ajay', 
        lastName:'R',
        dob:'3/06/1980', 
        class :'second', 
        subject:'Science', 
        teacher:'Rahul',
        address:'Sharjah'
      },
      {
        rollno:'3', 
        firstName:'Kiran', 
        lastName:'L',
        dob:'8/09/1990', 
        class :'tenth', 
        subject:'Science', 
        teacher:'Vijaya',
        address:'UAE'
      }
    ];
    if(localStorage.getItem('students') == null){
      this.students = defstudents;
      localStorage.setItem('students', JSON.stringify(this.students));
    }
    else{
        this.students = JSON.parse(localStorage.getItem('students'));
    }
  }

  getStudents(){
  	return this.students;
  }
  getRemoteCustomers(): Observable<[]>{
  	return this.http.get<[]>(this.customerUrl); 		
 }

  addStudent(student){
  	student.rollno = Math.round(Math.random()*100000);
    	this.students.push(student);
      localStorage.setItem('students', JSON.stringify(this.students));
  }

  updateStudent(student){
  	for(var i=0;i<this.students.length;i++){
  		if(student.rollno == this.students[i].rollno){
  			this.students[i] = student;
  		}
  	}
    localStorage.setItem('students', JSON.stringify(this.students));
  }
  getStudentById(rollno){
    for(var i=0;i<this.students.length;i++){
        if(rollno == this.students[i].rollno){
        return this.students[i];
      }
    }
    return null;
  }

  deleteStudent(student){
  	for(var i=0;i<this.students.length;i++){
  		if(student.rollno == this.students[i].rollno){
  			this.students.splice(i,1);
        localStorage.setItem('students', JSON.stringify(this.students));
  		}
  	}
  }
}