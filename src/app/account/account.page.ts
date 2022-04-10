import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../_services/global.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  login: Boolean;

  constructor(
    public global: GlobalService
  ) { 
    if( this.global.user != null){
      this.login = true;
    }else{
      this.login = false;
    }
  }

  ngOnInit() {
  }

}
