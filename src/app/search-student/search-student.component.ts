import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent {

  constructor(private api:ApiService){}

  name=""

searchData:any=[]

  readValue=()=>
  {
    let data={
      "name": this.name
  }
  console.log(data)
  this.api.searchStudent(data).subscribe(
    (response:any)=>
    {
      console.log(response)
    
      if (response.length==0) {
        alert("Invalid student name")
        
      } else {
        
        this.searchData=response
      }

}
  )
}
deleteBtnClick=(id:any)=>{

  let data:any={"id":id}
  this.api.deleteStudent(data).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.status=="success")
      {
        alert("Deleted Successfully")
        this.searchData=[]
      }
      
    }
  )
}
}