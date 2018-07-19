import { Component, OnInit, Input } from '@angular/core';
import { CreateHealthService } from 'src/app/service/create-health.service';

@Component({
  selector: 'app-add-item-history',
  templateUrl: './add-item-history.component.html',
  styleUrls: ['./add-item-history.component.css']
})
export class AddItemHistoryComponent implements OnInit {
  @Input() obUpDate: any;
  @Input() idHis: number;
  @Input() idCustom: number;
  today = Date.now();
  constructor(private create: CreateHealthService) {
   
  }

  ngOnInit() {
    
  }
  add(obAdd) {
    console.log(this.idHis + "|" + obAdd.value.Value + "|" + obAdd.value.Date + "demo");
    this.create.createHealthIndex( this.idCustom, this.idHis, obAdd.value.Value, obAdd.value.Date).subscribe(data => console.log(data));
  }
}
