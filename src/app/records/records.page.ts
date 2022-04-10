import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../_services/global.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.page.html',
  styleUrls: ['./records.page.scss'],
})
export class RecordsPage implements OnInit {

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
