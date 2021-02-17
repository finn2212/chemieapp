import { Injectable } from '@angular/core';
import { SelectValueAccessor } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CalcService {
  public hasCalculted = false;
  public mode = "";
  public result1: number;
  public result2: number;
  public result3: number;

  public value1: number;
  public value2: number;
  public value3: number;
  public value4: number;

  constructor() { }

  public calc1(value1, value2, value3, value4){
    this.setMode("calc1");
    this.setValues(value1, value2, value3, value4);
    this.result1 = value1 *  value2 * value3 * value4;
    this.hasCalculted = true;
    }

  public calc2(value1, value2, value3, value4){
    this.setMode("calc2");
    this.setValues(value1, value2, value3, value4);
    this.result2 = value1 + value2 + value3 + value4;
    this.hasCalculted = true;
    }

   public calc3(value1, value2, value3, value4){
    this.setMode("calc3");
    this.setValues(value1, value2, value3, value4);
    this.result3 =  value1 - value2 - value3 - value4;
    this.hasCalculted = true;
    }

    private setMode(mode){
    this.mode = mode;
    }

    setValues(value1, value2, value3, value4){
      this.value1 = value1;
      this.value2 = value2;
      this.value3 = value3;
      this.value4 = value4;

    }
}
