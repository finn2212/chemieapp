import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service'
import { AuthService } from '../../auth/auth.service'
import { Observable } from 'rxjs';
import { RegisterCodeService } from '../../auth/register-code.service';
import { UserData } from '../../models/userData'
import { User } from 'src/app/auth/user.model';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {

  constructor(private userService: UserService, private auth: AuthService, private registerCodeService: RegisterCodeService) { }
  users: Observable<any>;
  usersArray: any[] = [];
  isEdidt = true;
  userData: UserData;





  ngOnInit() {
    this.users = this.userService.getUserInformation().valueChanges();
    this.users.subscribe(res => {
      this.usersArray = res;
    })
    console.log(this.userData);

    this.userData = this.userService.getUserData();
    console.log(this.userData);


  }



}
