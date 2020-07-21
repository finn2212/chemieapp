import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-agbs',
  templateUrl: './agbs.component.html',
  styleUrls: ['./agbs.component.scss'],
})
export class AgbsComponent implements OnInit {

  constructor(private modalCtlr: ModalController) { }

  ngOnInit() { }

  dismiss() {
    this.modalCtlr.dismiss();
  }

}
