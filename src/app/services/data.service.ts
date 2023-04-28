import { Injectable } from '@angular/core';
import { students } from '../student/student.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  alldetails:Array<students>=[]
  constructor() { }
  id=1
  pre:string='student'
  addstudents(data:students)
  {
    data.id=this.pre+this.id
    this.alldetails.push(data)
    this.id++
  }

  getstudents()
  {
    return this.alldetails
  }
}
