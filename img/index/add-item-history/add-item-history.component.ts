import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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
  @Input() infoAdd: any;
  today = Date.now();
  @Output() close = new EventEmitter<string>();
  constructor(private create: CreateHealthService) {
   
  }
  closeAdd() {
    this.close.emit('add');
  }
  ngOnInit() {

    console.log(this.infoAdd.Type + "type");
  }
  add(obAdd) {
    console.log("info add" + obAdd.value.Date + "|" + obAdd.value.Value);
    this.create.createHealthIndex(this.idCustom, this.idHis, obAdd.value.Value, obAdd.value.Date).subscribe(data => { console.log(data); this.closeAdd(); });
  }
}
