import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { contactSchema } from 'src/models/contactSchema';
@Component({
  selector: 'app-updatecontent',
  templateUrl: './updatecontent.component.html',
  styleUrls: ['./updatecontent.component.css']
})
export class UpdatecontentComponent implements OnInit{

  content:contactSchema={}
    constructor(private api: ApiService, private updateroute: ActivatedRoute,private navigate:Router) { }

  ngOnInit(): void {
    
   // get id  from url
this.updateroute.params.subscribe({
  next:(parameters:any)=>{
    // object destructuring
  const {id}=parameters
  console.log(id);

  // call service
  this.api.viewcontent(id).subscribe({
    next:(res:any)=>{
    this.content=res
    console.log(this.content);
        }
  })

  
  }
})


  }

updatecontent(id:any,content:any){
    // call service
  this.api.editcontent(id,content).subscribe({
    next:(res:any)=>{
      alert("Successfully Updated ...")
      this.navigate.navigateByUrl("")
    }
  })
}

}
