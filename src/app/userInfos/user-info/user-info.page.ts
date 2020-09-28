import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service'
import { AuthService } from '../../auth/auth.service'
import { Observable } from 'rxjs';
import { RegisterCodeService } from '../../auth/register-code.service';
import { UserData } from '../../models/userData'
import CountriesData from '../../resources/countries/countries';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {
  users: Observable<any>;
  usersArray: any[] = [];
  isEdidt = true;
  userData: UserData;
  countries;
  constructor(private userService: UserService, private auth: AuthService, private registerCodeService: RegisterCodeService) {
    this.countries = new CountriesData().getcountriesData();
  }



  async ngOnInit() {
    // this.users = this.userService.getUserInformation().valueChanges();
    // this.users.subscribe(res => {
    //   this.usersArray = res;
    // })
    // this.userData = this.userService.getUserData();

  }

}
