import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import * as jwt_decode from 'jwt-decode';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {



  constructor(private _authService: AuthService) { }

  ngOnInit() {

  }
  decodeToken(){
    var decoded = jwt_decode(localStorage.getItem('token'));
    console.log(decoded);

  }

}
