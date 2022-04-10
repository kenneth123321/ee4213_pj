import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';
import { InAppBrowser, InAppBrowserObject } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Clipboard } from '@capacitor/clipboard';
import { Location } from '@angular/common';
import { GlobalService } from '../_services/global.service';

@Component({
  selector: 'app-hospital-detail',
  templateUrl: './hospital-detail.page.html',
  styleUrls: ['./hospital-detail.page.scss'],
})
export class HospitalDetailPage implements OnInit {

  @ViewChild('item1', {read: ElementRef}) item1;
  @ViewChild('item2', {read: ElementRef}) item2;
  @ViewChild('item3', {read: ElementRef}) item3;
  @ViewChild('item4', {read: ElementRef}) item4;
  @ViewChild('item5', {read: ElementRef}) item5;
  @ViewChild('item6', {read: ElementRef}) item6;

  isOpen1: boolean;
  isOpen2: boolean;
  isOpen3: boolean;
  isOpen4: boolean;
  isOpen5: boolean;
  isOpen6: boolean;

  openIcon1: string;
  openIcon2: string;
  openIcon3: string;
  openIcon4: string;
  openIcon5: string;
  openIcon6: string;

  desc1: string;
  desc2: string;
  desc3: string;
  desc4: string;
  desc5: string;
  desc6: string;

  login: Boolean;

  constructor(
    private location: Location,
    public renderer: Renderer2,
    public toast: ToastController,
    public platform: Platform,
    private inAppBrowser: InAppBrowser,
    public global: GlobalService
  ) {
    if( this.global.user != null){
      this.login = true;
    }else{
      this.login = false;
    }
    
    this.isOpen1 = false;
    this.isOpen2 = false;
    this.isOpen3 = false;
    this.isOpen4 = false;
    this.isOpen5 = false;
    this.openIcon1 = "add";
    this.openIcon2 = "add";
    this.openIcon3 = "add";
    this.openIcon4 = "add";
    this.openIcon5 = "add";
    this.desc1 = "2990 1111 ";
    this.desc2 = "pmh.enquiry@ha.org.hk ";
    this.desc3 = "2-10 Princess Margaret Hospital Road, Lai Chi Kok, Kowloon ";
    this.desc4 = "Bus: 1A, Minibus: 89A, MTR: Mong Kwok Station ";
    this.desc5 = "Morning: 10:00am - 12:00pm\n Afternoon: 16:00pm - 18:00pm ";
   }

  ngOnInit() {
  }

  expandContent(item){
    switch (item) {
      case '1':
          if(!this.isOpen1){
            this.renderer.setStyle(this.item1.nativeElement,'display','block');
            this.isOpen1 = true;
            this.openIcon1 = "remove";
          }
          else {
            this.renderer.setStyle(this.item1.nativeElement,'display','none');
            this.isOpen1 = false;
            this.openIcon1 = "add";
          }
          break;
      case '2':
          if(!this.isOpen2){
            this.renderer.setStyle(this.item2.nativeElement,'display','block');
            this.isOpen2 = true;
            this.openIcon2 = "remove";
          }
          else {
            this.renderer.setStyle(this.item2.nativeElement,'display','none');
            this.isOpen2 = false;
            this.openIcon2 = "add";
          }
          break;
      case '3':
          if(!this.isOpen3){
            this.renderer.setStyle(this.item3.nativeElement,'display','block');
            this.isOpen3 = true;
            this.openIcon3 = "remove";
          }
          else {
            this.renderer.setStyle(this.item3.nativeElement,'display','none');
            this.isOpen3 = false;
            this.openIcon3 = "add";
          }
          break;
      case '4':
          if(!this.isOpen4){
            this.renderer.setStyle(this.item4.nativeElement,'display','block');
            this.isOpen4 = true;
            this.openIcon4 = "remove";
          }
          else {
            this.renderer.setStyle(this.item4.nativeElement,'display','none');
            this.isOpen4 = false;
            this.openIcon4 = "add";
          }
          break;
      case '5':
          if(!this.isOpen5){
            this.renderer.setStyle(this.item5.nativeElement,'display','block');
            this.isOpen5 = true;
            this.openIcon5 = "remove";
          }
          else {
            this.renderer.setStyle(this.item5.nativeElement,'display','none');
            this.isOpen5 = false;
            this.openIcon5 = "add";
          }
          break;
      default:
          console.log("toggle error");
          break;
    // this.renderer.setStyle(item.nativeElement,'display','block');
  }
}

openAppUrl(app: string, name: string, id?: string) {
  console.log("App:", app);
  const browser: InAppBrowserObject = this.inAppBrowser.create(
    'https://www.google.com/maps/place/2-10+Princess+Margaret+Hospital+Rd,+Kwai+Chung/@22.3403568,114.1321697,17z/data=!3m1!4b1!4m5!3m4!1s0x3403f8adafa67e05:0x5c203a85158ec7e!8m2!3d22.3403568!4d114.1343637'
    , '_system');
}

async writeToClipboard(content){
  await Clipboard.write({
    string: content
  }).then(() => {
    this.toast.create({
      color: 'dark',
      duration: 2000,
      mode: 'ios',
      message: 'Copied to clipboard',
    }).then(t => { t.present(); });

  })
}

goBack() {
  console.log("going back");
  this.location.back();
}

}
