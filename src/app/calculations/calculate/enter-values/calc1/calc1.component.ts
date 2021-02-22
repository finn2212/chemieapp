import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CalcService } from 'src/app/calculations/calc.service';
import { InformationModalPage } from '../information-modal/information-modal.page';

@Component({
  selector: 'app-calc1',
  templateUrl: './calc1.component.html',
  styleUrls: ['./calc1.component.scss'],
})
export class Calc1Component implements OnInit {
  
  public value1: number;
  public value2: number;
  public value3: number;
  public value4: number;

  constructor(
    private router: Router, 
    public calcService: CalcService,
    private  modalCtrl: ModalController) { }

  ngOnInit() {}

  calc(){
    this.calcService.calc1(this.value1,this.value2,this.value3,this.value4);
    this.router.navigateByUrl('/calculate/tabs/summary')
  }
  async openTodoModal(index) {
    const modal = await this.modalCtrl.create({
      component: InformationModalPage,
      cssClass: 'information-modal',
      backdropDismiss: false
    });
    await modal.present();

  }

}
