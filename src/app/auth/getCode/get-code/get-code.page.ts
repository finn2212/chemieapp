import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterCodeService } from '../../register-code.service';


@Component({
  selector: 'app-get-code',
  templateUrl: './get-code.page.html',
  styleUrls: ['./get-code.page.scss'],
})
export class GetCodePage implements OnInit {

  constructor(private router: Router, private registerCodeService: RegisterCodeService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.inhalt;


    console.log(email + password)
    this.registerCodeService.createKey(email);
    this.registerCodeService.createDataMail(email, password);
    this.router.navigateByUrl('/auth');
    form.reset();
  }
  returnToAuth() {
    this.router.navigateByUrl('/auth');
  }
}
