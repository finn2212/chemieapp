import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterCodeService } from '../../register-code.service';
import { UserService } from '../../../shared/user.service';

@Component({
  selector: 'app-get-code',
  templateUrl: './get-code.page.html',
  styleUrls: ['./get-code.page.scss'],
})
export class GetCodePage implements OnInit {

  constructor(private router: Router, private registerCodeService: RegisterCodeService, private userService: UserService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const name = form.value.name;
    const company = form.value.company;
    const country = form.value.country;
    const adress = form.value.adress;
    const telephone = form.value.telephone;
    const data = this.userService.createUserInfo(email, name, company, country, adress, telephone);

    this.registerCodeService.createDataMail(data);
    this.router.navigateByUrl('/auth');
    form.reset();
  }
  returnToAuth() {
    this.router.navigateByUrl('/auth');
  }
}
