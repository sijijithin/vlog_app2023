import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allcontents:any,searchKey:string,key:string): any[] {
    const result:any=[]
    if(!allcontents || searchKey=="" || key==""){
      return allcontents
    }
    allcontents.forEach((items:any)=>{
      if(items[key].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(items)
      }
    })
    return result;
  }

}
