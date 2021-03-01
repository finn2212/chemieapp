import { Component } from '@angular/core';
import { Globalization } from '@ionic-native/globalization/ngx';
import { LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { LanguageService } from '../shared/language.service';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

  public language: string;
  public selectlanguage: string;
  isLoading: boolean;
  version;


  studentList = [];
  constructor(
    private globalization: Globalization,
    private userService: UserService,
    private _translate: TranslateService,
    private languageSerive: LanguageService,
    public loadingController: LoadingController,
   
  ) {
   this.version = environment.version;
  this.initList();
  }



  ionViewDidEnter(): void {

    this.language = this.languageSerive.language;

  }
  initList() {
    console.log('start loading');
    this.isLoading = true;
    this.presentLoading();
    return this.userService.read_user().subscribe(data => {

      this.studentList = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Age: e.payload.doc.data()['Age'],
          Address: e.payload.doc.data()['Address'],
          Email: e.payload.doc.data()['Email'],
          Company: e.payload.doc.data()['Company'],
          Country: e.payload.doc.data()['Country'],
          Partner: e.payload.doc.data()['Partner'],
          Telefon: e.payload.doc.data()['Telefon'],
          maschine: e.payload.doc.data()['maschine'],
        };
      })
      this.dismiss();
      console.log('finish loading');
      console.log(this.studentList);

    });
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',

    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    })
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
    record.EditEmail = record.Email;
    record.EditCompany = record.Company
    record.EditCountry = record.Country;
    record.EditPartner = record.Partner;
    record.EditTelefon = record.Telefon;
    record.Editmaschine = record.maschine;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Age'] = recordRow.EditAge;
    record['Email'] = recordRow.EditEmail;
    record['Address'] = recordRow.EditAddress;
    record['Company'] = recordRow.EditCompany;
    record['Country'] = recordRow.EditCountry;
    record['Partner'] = recordRow.EditPartner;
    record['Telefon'] = recordRow.EditTelefon;
    record['maschine'] = recordRow.Editmaschine;

    this.userService.update_user(recordRow.id, record);
    recordRow.isEdit = false;
  }

  RemoveRecord(rowID) {
    this.userService.delete_user(rowID);
  }
  public changeLanguage(): void {
    this._translate.get
    this._translate.use(this.language);
    this.languageSerive.language = this.language

  }

}