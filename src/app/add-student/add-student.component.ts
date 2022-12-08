import { Component } from '@angular/core';

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
  

  readValue=()=>{
    let data:any={"name":this.name,"admno":this.admno,"rollno":this.rollno,"college":this.college}
    console.log(data)
  }
}
