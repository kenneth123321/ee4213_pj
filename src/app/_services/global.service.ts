import { Injectable } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public user = null;
  public rmb_me = null;
  public rmb_user = '';

  constructor(
    private nativeStorage: NativeStorage,
  ) { }

  public saveUser() {
    this.nativeStorage.setItem('user', '123');
  }

  public removeUser(){
    this.nativeStorage.setItem('user', null);
  }

  public saveRmbme() {
    this.nativeStorage.setItem('rmb_me', true);
  }

  public removeRmbme(){
    this.nativeStorage.setItem('rmb_me', false);
  }

  public saveRmbuser() {
    this.nativeStorage.setItem('rmb_user', '123');
  }

  public removeRmbuser(){
    this.nativeStorage.setItem('rmb_user', '');
  }
}
