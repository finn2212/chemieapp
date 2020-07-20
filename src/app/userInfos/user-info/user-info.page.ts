import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service'
import { User } from '../userModel'

import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {

  constructor(private userService: UserService) { }
  users: Observable<any>;

  ngOnInit() {

  }


}
