import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CalcService } from '../../calc.service';

@Component({
  selector: 'app-enter-values',
  templateUrl: './enter-values.page.html',
  styleUrls: ['./enter-values.page.scss'],
})
export class EnterValuesPage implements OnInit {
  public enterValues: string;
  public state: string;

  constructor(private _translate: TranslateService,private calcService: CalcService) { 
    this.state = "calc1"
  }

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
  segmentChanged(ev: any) {
    console.log(ev.detail.value);

    this.state = ev.detail.value;
    this.calcService.mode = ev.detail.value
  }


}
