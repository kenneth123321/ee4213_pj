import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Location } from "@angular/common";
import { GlobalService } from './../_services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form = {
    mid: null,
    mobile: null,
  };
  rmb_me: boolean;
  disable_btn: boolean;
  public refresh: boolean;

  @ViewChild('page', { read: ElementRef }) page;
  @ViewChild('bg', { read: ElementRef }) bg;

  constructor(
    public renderer: Renderer2,
    public navCtrl: NavController,
    public alertController: AlertController,
    public location: Location,
    public global: GlobalService
  ) { 
    this.refresh = false;
    this.disable_btn = false;
    this.form.mid = this.global.rmb_user;
    this.rmb_me = this.global.rmb_me;
  }

  ngOnInit() {
  }

  login() {
    this.renderer.setStyle(this.bg.nativeElement, 'opacity', '1');
    this.renderer.setStyle(this.page.nativeElement, 'opacity', '0');
    this.disable_btn = true;
    if(this.rmb_me == true){
      this.global.saveRmbme();
    }else{
      this.global.removeRmbme();
    }
    if(this.rmb_me == true){
      this.global.saveRmbuser();
    }else{
      this.global.removeRmbuser();
    }
    setTimeout(() => {
      if(this.form.mid == '123' && this.form.mobile == '123'){
        this.global.user = '123';
        this.global.saveUser();
        this.location.back();
      }else{
        this.alertController.create({
          backdropDismiss: false,
          mode: 'ios',
          header: 'Wrong Login data',
          buttons: [
            {
              text: 'ok',
              handler: () => {
                this.disable_btn = false;
                this.renderer.setStyle(this.page.nativeElement, 'opacity', '1');
                this.renderer.setStyle(this.bg.nativeElement, 'opacity', '0');
                
              }
            }]
        }).then(t => { t.present(); });
      }
    }, 2000);
  }

  goBack() {
    console.log("going back");
    this.location.back();
  }

  goReg(){
    this.navCtrl.navigateRoot('/register');
  }

}
