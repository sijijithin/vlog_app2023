import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {

  filteredpost: any
  searchTerm: string = ""
  isLoading: boolean = true;
  allcontents: any = []
  errorMsg: string = ""
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getallcontents()
  }
  // getallcontents
  getallcontents() {
    this.api.getallcontents().subscribe({
      next: (res: any) => {
        setTimeout(() => {
          this.allcontents = res;
          this.filteredpost=this.allcontents;
          this.isLoading = false
          console.log(this.allcontents);
        },2000);

      },
      error: (err: any) => {
        console.log(err.message);
        this.errorMsg = err.message;

      }
    })
  }

  deletecontent(id: any) {
    this.api.removecontent(id).subscribe({
      next: () => {
        this.isLoading = true
        this.getallcontents()
      }
    })
  }
// filter post 

    filterposts(category: any) {
      if(category!='all'){
        setTimeout(()=>{
          this.filteredpost = this.allcontents.filter((post: any) =>  post.categories == category || category == "");

        },1000)
      }
      else{
        this.filteredpost=this.allcontents
      }
    }

}




