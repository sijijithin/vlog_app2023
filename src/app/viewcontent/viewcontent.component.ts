import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewcontent',
  templateUrl: './viewcontent.component.html',
  styleUrls: ['./viewcontent.component.css']
})
export class ViewcontentComponent implements OnInit {

content:any={}
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get parameter from router
    this.route.params.subscribe({
      next:(res:any) => {
        // object destructuring
        const { id } = res
      
        // call service
        this.api.viewcontent(id).subscribe({
          next:(details: any) => {
            console.log(details);
            this.content=details


          }
        })


      }
    })
  }
}
