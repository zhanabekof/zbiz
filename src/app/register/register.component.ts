import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  login: string;
  email: string;
  password: string;
  constructor() { }
  submit(form: NgForm){
    console.log(form);
  }
  ngOnInit(): void {
  }

}
