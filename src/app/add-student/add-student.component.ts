import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  name=""
  admno=""
  rollno=""
  college=""

  constructor(private api:ApiService){}
  

  readValue=()=>{
    let data:any={"name":this.name,"admno":this.admno,"rollno":this.rollno,"college":this.college}
    console.log(data)
    this.api.addStudent(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success")
        {
          alert("Course added successfully")
          this.name=""
          this.admno=""
          this.rollno=""
          this.college=""
        }
        else{
          alert("Something went wrong")
        }
  }
    )
}
}
