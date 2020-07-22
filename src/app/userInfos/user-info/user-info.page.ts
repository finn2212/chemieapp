import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service'
import { AuthService } from '../../auth/auth.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {

  constructor(private userService: UserService, private auth: AuthService) { }
  users: Observable<any>;


  ngOnInit() {
    this.users = this.userService.getUserInformation().valueChanges();
  }


}
