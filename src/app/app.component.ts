import { Component } from '@angular/core';
import { GlobalService } from './_services/global.service';
import { Platform } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    public global:GlobalService,
    public nativeStorage:NativeStorage,
    private platform: Platform,
  ) {
    this.initializeApp()
  }

  initializeApp(){
    this.platform.ready().then(() => {

      if(this.platform.is("ios") || this.platform.is("android")) {


        this.nativeStorage.getItem('user').then(
          data => {
            this.global.user = data;
            console.log("Got user: ",data);
            console.log("Got got global user: ",this.global.user);
          },
          error => {
            console.log("fetchine 'me' error");
            console.log(error);
          }
        );

        this.nativeStorage.getItem('rmb_me').then(
          data => {
            this.global.rmb_me = data;
            console.log("Got rmb_me: ",data);
            console.log("Got got global rmb_me: ",this.global.rmb_me);
          },
          error => {
            console.log("fetchine 'me' error");
            console.log(error);
          }
        );

        this.nativeStorage.getItem('rmb_user').then(
          data => {
            this.global.rmb_user = data;
            console.log("Got rmb_user: ",data);
            console.log("Got got global rmb_user: ",this.global.rmb_user);
          },
          error => {
            console.log("fetchine 'me' error");
            console.log(error);
          }
        );

      }

    });
  }
}

