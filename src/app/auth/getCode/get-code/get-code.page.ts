import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterCodeService } from '../../register-code.service';
import { UserService } from '../../../shared/user.service';
import { ModalController, AlertController } from '@ionic/angular';
import { AgbsComponent } from '../agbs/agbs.component';
import CountriesData from '../../../resources/countries/countries';




@Component({
  selector: 'app-get-code',
  templateUrl: './get-code.page.html',
  styleUrls: ['./get-code.page.scss'],
})
export class GetCodePage implements OnInit {

  constructor(
    private router: Router,
    private registerCodeService: RegisterCodeService,
    private userService: UserService,
    private modalController: ModalController,
    private alertCtrl: AlertController,
  ) {
    this.countries = new CountriesData().getcountriesData();
  }

  agbs: boolean;
  countries;



  ngOnInit() {
  }
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
    const adress = form.value.adress;
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
