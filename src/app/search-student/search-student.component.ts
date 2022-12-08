import { Component } from '@angular/core';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent {

  name=""
  

  readValue=()=>
  {
    let search={
      "name": this.name
  }
  console.log(search)

}
}
