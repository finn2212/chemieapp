import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-information-modal',
  templateUrl: './information-modal.page.html',
  styleUrls: ['./information-modal.page.scss'],
})
export class InformationModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  close() {
    this.modalCtrl.dismiss();
  }


}
