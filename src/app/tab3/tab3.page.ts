import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  panelEnabled = true;
  constructor(private menuController: MenuController) {}

  ionViewWillEnter() {
    this.panelEnabled = true;
    this.menuController.enable(true, 'third');
  }
  
  ionViewWillLeave() {
    this.panelEnabled = false;
  }
}
