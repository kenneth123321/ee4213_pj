import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.page.html',
  styleUrls: ['./hospital-list.page.scss'],
})
export class HospitalListPage implements OnInit {

  searchbar: any;
  items: any;
  query: any;
  searchTerm: string;
  records = [ { "name":"Amsterdam Hospital"}, { "name":"Bogota Hospital"}, { "name":"Buenos Hospital"}, { "name":"Aires Clinic"}, { "name":"Cairo Clinic"}, { "name":"Dhaka Clinic"}, 
  { "name":"Edinburgh Clinic"}, { "name":"Geneva Clinic"}, { "name":"Genoa Clinic"}, { "name":"Glasgow Hospital"}, { "name":"Hanoi Hospital"}, { "name":"Hong Kong Clinic"},{ "name": "Islamabad Clinic"}, { "name":"Istanbul Clinic"}]

  constructor(
    private navCtrl: NavController
  ) { 
  }

  ngOnInit() {
  }

  goDetail(){
    this.navCtrl.navigateRoot('/hospital-detail');
  }

}
