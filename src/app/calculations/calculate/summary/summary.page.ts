import { Component, OnInit } from '@angular/core';
import { CalcService } from '../../calc.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {

  constructor(private calcService: CalcService) { }
  public value1: number;
  public value2: number;
  public value3: number;
  public value4: number;
  public result: number;
  public mode: string;
  public hasCalculated: boolean;


  ngOnInit() {
    this.calcService.value1
  }
  ionViewWillEnter() {
   this.value1 = this.calcService.value1;
   this.value2 = this.calcService.value2;
   this.value3 = this.calcService.value3;
   this.value4 = this.calcService.value4;
   this.mode = this.calcService.mode;
  this.hasCalculated = this.calcService.hasCalculted;
   this.getResult();
  this.setMode();
  }

  getResult(){
    if (this.mode =="calc1"){
     this.result = this.calcService.result1;
    }
    else if (this.mode =="calc2"){
      this.result = this.calcService.result2;
    }
    else if (this.mode =="calc3"){
      this.result = this.calcService.result3;
    }
  }
  setMode(){
    if (this.mode =="calc1"){
      console.log(this.mode);
      this.mode = "Multiplikation"
    }
    else if (this.mode =="calc2"){
      console.log(this.mode);
      this.mode = "Addition"
    }
    else if (this.mode =="calc3"){
      console.log(this.mode);
      this.mode = "Subtraktion"
    }
  }



}
