import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { students } from '../student/student.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  data!:students|undefined;

  constructor(private router:ActivatedRoute,private ser:DataService)
  {

  }

  ngOnInit(){
    this.router.params.subscribe((params:any) =>{
      console.log(params);
      let res=this.ser.getstudents().find(x=>x.id==params.id)
      if(res!=null)
      {
        this.data=res
      }
    }
    )
  }
}
