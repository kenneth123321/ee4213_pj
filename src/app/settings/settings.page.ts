import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { GlobalService } from '../_services/global.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  lang: any;
  size: any;
  login: Boolean;

  constructor(
    public global: GlobalService,
    public navCtrl: NavController,
    public alertController: AlertController,
  ) {
    if( this.global.user != null){
      this.login = true;
    }else{
      this.login = false;
    }
    this.lang = "en"
    this.size = "small"
   }

  ngOnInit() {
  }

  goLogin(){
    this.navCtrl.navigateRoot('/login');
  }

  logout(){
    this.alertController.create({
      backdropDismiss: false,
      mode: 'ios',
      header: 'Are sure to logout?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.global.user = null;
            this.global.removeUser()
            window.location.reload();
          }
        },
        {
          text: 'No'
        }
      ]
    }).then(t => { t.present(); });
  }

}
