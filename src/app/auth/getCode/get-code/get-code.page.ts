import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterCodeService } from '../../register-code.service';
import { UserService } from '../../../shared/user.service';
import { ModalController, AlertController } from '@ionic/angular';
import { AgbsComponent } from '../agbs/agbs.component';
import CountriesData from '../../../resources/countries/countries';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';

interface StudentData {
  Name: string;
  Age: number;
  Address: string;
}



@Component({
  selector: 'app-get-code',
  templateUrl: './get-code.page.html',
  styleUrls: ['./get-code.page.scss'],
})

export class GetCodePage implements OnInit {


  studentList = [];
  studentData: StudentData;
  studentForm: FormGroup;

  constructor(
    private router: Router,
    private registerCodeService: RegisterCodeService,
    private userService: UserService,
    private modalController: ModalController,
    private alertCtrl: AlertController,
    public fb: FormBuilder
  ) {
    this.countries = new CountriesData().getcountriesData();
  }
  ngOnInit() {
    this.studentForm = this.fb.group({
      Name: ['', [Validators.required]],
      Age: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Company: ['', [Validators.required]],
      Country: ['', [Validators.required]],
      Partner: ['', [Validators.required]],
      Telefon: ['', [Validators.required]],
      maschine: ['', [Validators.required]],
      agb: ['', [Validators.required]]
      
    })
  }


  CreateRecord() {
    console.log(this.studentForm.value);
    this.userService.create_user(this.studentForm.value).then(resp => {
      this.studentForm.reset();
    })
      .catch(error => {
        console.log(error);
      });
  }


  agbs: boolean;
  countries;





  

  onSubmit(form: NgForm) {
    if (!this.agbs) {
      this.showAlert("akzeptiere AGBs")
    }
    if (!form.valid || !this.agbs) {
      return;
    }
    const email = form.value.email;
    const name = form.value.name;
    const company = form.value.company;
    const country = form.value.country;
    let adressString = form.value.adress1 + ' ' + form.value.adressCity + ' ' + form.value.adressState + ' ' + form.value.adressZipCode;
    const adress = adressString;
    const telephone = form.value.telephone;
    const contactPerson = form.value.contactPerson;
    const artOfWorking = form.value.artOfWorking;
    const data = this.userService.createUserInfo(email, name, company, country, adress, telephone, contactPerson, artOfWorking);

    this.registerCodeService.createDataMail(data);
    this.router.navigateByUrl('/auth');
    form.reset();
  }
  async presentModal() {
    const model = await this.modalController.create({
      component: AgbsComponent,
    });
    return await model.present();

  }
  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Unzureichende Ausfüllung',
        message: message,
        buttons: ['Okay']
      })
      .then(alertEl => alertEl.present());
  }
  returnToAuth() {
    this.router.navigateByUrl('/auth');
  }
}
