import { Component, OnInit , Input } from '@angular/core';
import { GetCustomerService } from '../../service/get-customer.service';
import { GetHealthCareService } from 'src/app/service/get-health-care.service';
@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  customer: any;
  healthCare = [];
  constructor(private getCus: GetCustomerService, private getHC: GetHealthCareService) {
   }
  @Input() id: number;

  ngOnInit() {
    this.getCus.getCustomer(this.id).subscribe(data => { this.customer = data; console.log(data); }, (error => this.customer = null));
    this.getHC.getHealthCareIndex(this.id).subscribe((data: any) => { this.healthCare = data; console.log(data.length); }, (error => this.healthCare = null));
    }

}
