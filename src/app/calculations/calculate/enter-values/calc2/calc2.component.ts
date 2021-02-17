import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalcService } from 'src/app/calculations/calc.service';

@Component({
  selector: 'app-calc2',
  templateUrl: './calc2.component.html',
  styleUrls: ['./calc2.component.scss'],
})
export class Calc2Component implements OnInit {

  public value1: number;
  public value2: number;
  public value3: number;
  public value4: number;

  constructor(private router: Router, public calcService: CalcService) { }

  ngOnInit() {}

  calc(){
    this.calcService.calc2(this.value1,this.value2,this.value3,this.value4);
    this.router.navigateByUrl('/calculate/tabs/summary')
  }

}
