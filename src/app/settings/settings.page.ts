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
  public selectlanguage: string
  constructor(private globalization: Globalization, private _translate: TranslateService, private languageSerive: LanguageService
  ) { }

  ionViewDidEnter(): void {
    this._initialiseTranslation();
    this.language = this.languageSerive.language;

  }
  _initialiseTranslation(): void {
    this._translate.get('SELECTLANGUAGE').subscribe((res: string) => {
      this.selectlanguage = res;
    });
  }

  public changeLanguage(): void {
    this._translate.get
    this._translate.use(this.language);
    this.languageSerive.language = this.language
    this._initialiseTranslation();
  }

}