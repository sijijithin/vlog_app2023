import { Component } from '@angular/core';
import { contactSchema } from 'src/models/contactSchema';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createcontent',
  templateUrl: './createcontent.component.html',
  styleUrls: ['./createcontent.component.css']
})
export class CreatecontentComponent {

  content:contactSchema={}

  constructor(private api: ApiService, private navigate: Router) { }

  // addcontent method 
  addcontent(){
    this.api.addcontent(this.content).subscribe({
      next:()=>{
        // alert content added
        alert("New Content added Successfully")
        // redirecte to maincontent page
        this.navigate.navigateByUrl("")
      }
    })
  
    
  }
}
