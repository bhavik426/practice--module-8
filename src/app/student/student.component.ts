import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  constructor(private ser:DataService)
  {

  }


  alldata: students[] = [];
  statearr: string[] = ['Gujarat', 'Maharashtra']
  hobbies1 = ['Volleyball','Football']
  student = new FormGroup({
    // id: new FormControl('', Validators.required),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormGroup({
      flat: new FormControl('', Validators.required),
      building: new FormControl('', [Validators.required, Validators.minLength(4)]),
      city: new FormControl('', [Validators.required, Validators.minLength(3)]),
      state: new FormControl('', Validators.required)
    }),
    gender: new FormControl('', Validators.required),
    hobbies: new FormArray([new FormControl(false), new FormControl(false)]),
    hoby: new FormControl()
  })

  get gid() {
    return this.student.get('id')
  }

  get gname() {
    return this.student.get('name')
  }

  get ggender() {
    return this.student.get('gender')
  }

  get ghobby() {
    return this.student.get('hobbies') as FormArray
  }

  get gflat() {
    return this.student.get('address')?.get('flat')
  }

  get gbuilding() {
    return this.student.get('address')?.get('building')
  }

  get gcity() {
    return this.student.get('address')?.get('city')
  }

  get gstate() {
    return this.student.get('address')?.get('state')
  }

  get hoby() {
    return this.student.get('hoby')
  }

  addhobbies() {
    this.ghobby.push(new FormControl(false))
    this.hobbies1.push(this.hoby?.value)
  }
  data() {
    console.log('start')
    let id = ''
    let name = this.gname?.value
    let gender = this.ggender?.value
    // let hobbies = this.ghobby?.value
    let newhobbies:string[]=[]
    let flat = this.student.get('address')?.get('flat')?.value
    let building = this.student.get('address')?.get('building')?.value
    let city = this.student.get('address')?.get('city')?.value
    let state = this.student.get('address')?.get('state')?.value

    this.student.value.hobbies?.forEach((element,index) => {
      if(element)
      {
        newhobbies.push(this.hobbies1[index])
      }
    });
    console.log(newhobbies);
    
    if (typeof id === 'string' && typeof name === 'string' && typeof gender === 'string' && typeof flat === 'string' && typeof building === 'string' && typeof city === 'string' && typeof state === 'string') {
      
      let v = {
        id: id, name: name, address:
        {
          flat: flat,
          building: building,
          city: city,
          state: state
        }
        , gender: gender, hobbies: newhobbies
      }

      this.ser.addstudents(v)
      // console.log(this.alldata)
    }
    // console.log(this.alldata,newhobbies)
  }
  patchname()
  {
    this.gname?.patchValue('Changed Name')
  }
}


export interface students {
  id: string,
  name: string,
  address: address,
  gender: string,
  hobbies: string[]
}
export interface address {
  flat: string,
  building: string,
  city: string,
  state: string
}
