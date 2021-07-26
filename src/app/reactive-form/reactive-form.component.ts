import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  updateForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    brand: new FormControl(''),
    model:  new FormControl(''),
    year:  new FormControl(''),
    serial:  new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
      // this.updateForm = new FormGroup({
      //   id: new FormControl(this.device.id),
      //   name: new FormControl(this.device.name),
      //   brand: new FormControl(this.device.brand),
      //   model:  new FormControl(this.device.model),
      //   year:  new FormControl(this.device.year),
      //   serial:  new FormControl(this.device.serial),
      // });
  }

 
}
