import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { students } from '../student/student.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  student:Array<students>=this.ser.getstudents()
  data:any
    constructor(private ser:DataService,private router:ActivatedRoute)
    {

    }
}
