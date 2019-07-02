import { Component, OnInit, Directive, ViewChild, ElementRef  } from '@angular/core';
import { FormGroup, FormControl, Validators} from  '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Login } from "../../models/login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: Login;
  loginForm: FormGroup;

  @ViewChild('username') usernameInput: ElementRef;

  constructor( private router: Router, private http: HttpClient ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })

    //setting focus on the title input
    this.usernameInput.nativeElement.focus();
  }

}
