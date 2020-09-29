import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.page.html',
  styleUrls: ['./calculate.page.scss'],
})
export class CalculatePage implements OnInit {

  public enterValues: string;
  public calculation: string;


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
      this.calculation = res;
    });


  }

}
