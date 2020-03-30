import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {

  }

}
