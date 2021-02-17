import { Component } from '@angular/core';
import { Globalization } from '@ionic-native/globalization/ngx';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

  public language: string;
  public selectlanguage: string;
  public name;
  public email;
  public company;
  public adress1;
  public adressCity;
  public adressState;
  public adressZipCode;
  public contactPerson;
  public telnumber;
  constructor(private globalization: Globalization, private _translate: TranslateService, private languageSerive: LanguageService
  ) { 
    this.name = "Peter Müller";
    this.email = "peter.müller@web.de";
    this.company = "Fsquared Media";
    this.adress1 = "Immenkoppel 2"
    this.adressCity = "Hamburg";
    this.adressState = "Hamburg";
    this.adressZipCode = "20099";
    this.contactPerson = "Mathias";
    this.telnumber = "0049123456789"
  }

  ionViewDidEnter(): void {
    //this._initialiseTranslation();
    this.language = this.languageSerive.language;

  }
  // _initialiseTranslation(): void {
  //   this._translate.get('SELECTLANGUAGE').subscribe((res: string) => {
  //     this.selectlanguage = res;
  //   });
  // }

  public changeLanguage(): void {
    this._translate.get
    this._translate.use(this.language);
    this.languageSerive.language = this.language
    // this._initialiseTranslation();
  }

}