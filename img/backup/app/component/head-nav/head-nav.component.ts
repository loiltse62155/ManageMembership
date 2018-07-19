import { Component, OnInit } from '@angular/core';
import { GetCustomerService } from '../../service/get-customer.service';
@Component({
  selector: 'app-head-nav',
  templateUrl: './head-nav.component.html',
  styleUrls: ['./head-nav.component.css']
})
export class HeadNavComponent implements OnInit {
  constructor(get :GetCustomerService) { 

  }

  ngOnInit() {
  }

}
