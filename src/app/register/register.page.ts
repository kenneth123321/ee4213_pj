import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { formatDate, Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form={
    surname: null,
    lastname: null,
    birth: null,
    hkid: null,
    phone: null,
    email: null,
    password: null,
    password2: null,
  }

  group: FormGroup;
  date: any;

  @ViewChild('page1', { read: ElementRef }) page1;
  @ViewChild('page2', { read: ElementRef }) page2;
  

  constructor(
    private location: Location,
    private renderer: Renderer2,
    private alertController: AlertController
  ) { 
    this.date =  new Date();
    this.date.setDate(this.date.getDate() - 1)
    this.date = formatDate(this.date ,'YYYY-MM-dd', 'zh-HK');
    console.log(this.date);
  }

  ngOnInit() {

    this.group = new FormGroup({
      surname: new FormControl('',[Validators.required,  Validators.pattern('^[a-zA-Z]+$')]),
      lastname: new FormControl('',[Validators.required,  Validators.pattern('^[a-zA-Z]+$')]),
      birth: new FormControl('',[Validators.required]),
      hkid:  new FormControl('',[Validators.required, Validators.pattern('^[A-Z]{1}[0-9]{6}[(]{1}[0-9]{1}[)]{1}')]),
      phone:  new FormControl('',[Validators.required,  Validators.pattern('[0-9]{8}')]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(9)]),
      password2: new FormControl('',[Validators.required, Validators.minLength(9)])
    })

    this.group.getError

  }

  submitForm(){
    this.renderer.setStyle(this.page2.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.page1.nativeElement, 'opacity', '1');
    console.log(this.form)
    setTimeout(() => {
      if(this.form.phone == 11111111){
        this.alertController.create({
          backdropDismiss: false,
          mode: 'ios',
          header: 'Registration Success',
          message: 'Comfirmation SMS is send to you. Please activate your account.',
          buttons: [
            {
              text: 'ok',
              handler: () => {
                this.goBack()
                
              }
            }]
        }).then(t => { t.present(); });
      }else{
        this.alertController.create({
          backdropDismiss: false,
          mode: 'ios',
          header: 'Phone No. is used',
          buttons: [
            {
              text: 'ok',
              handler: () => {
                this.renderer.setStyle(this.page2.nativeElement, 'opacity', '1');
                this.renderer.setStyle(this.page1.nativeElement, 'opacity', '0');
                
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

}
