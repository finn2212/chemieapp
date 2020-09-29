import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-enter-values',
  templateUrl: './enter-values.page.html',
  styleUrls: ['./enter-values.page.scss'],
})
export class EnterValuesPage implements OnInit {
  public enterValues: string;

  constructor(private _translate: TranslateService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this._initialiseTranslation();

  }
  _initialiseTranslation(): void {
    this._translate.get('ENTERVALUES').subscribe((res: string) => {
      this.enterValues = res;
    });
    this._translate.get('CALCULATION').subscribe((res: string) => {
      //this.calculation = res;
    });


  }


}
