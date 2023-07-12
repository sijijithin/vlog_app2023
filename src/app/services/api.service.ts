import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contactSchema } from 'src/models/contactSchema';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url = "https://vlog-server-api.onrender.com"

  constructor(private http: HttpClient) { }

  // get all content
  getallcontents() {
    return this.http.get(`${this.base_url}/contacts`)

  }
  // view content
  viewcontent(id:any){
// make api call to http://localhost:3000/contacts/id
return this.http.get(`${this.base_url}/contacts/${id}`)
  }

  // addcontent
  addcontent(content:contactSchema){
    return this.http.post(`${this.base_url}/contacts`,content)
  }

  // update content
 editcontent(id:any,body:contactSchema){
// make api call to http://localhost:3000/contacts/id
 return this.http.put(`${this.base_url}/contacts/${id}`,body)
  }

  // remove content
  removecontent(id:any){
   // make api call to http://localhost:3000/contacts/id
   return this.http.delete(`${this.base_url}/contacts/${id}`)

  }
}
