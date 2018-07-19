import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { UpdateHealthIndexService } from 'src/app/service/update-health-index.service';

@Component({
  selector: 'app-edit-item-history',
  templateUrl: './edit-item-history.component.html',
  styleUrls: ['./edit-item-history.component.css']
})
export class EditItemHistoryComponent implements OnInit {
  @Input() obUpDate: any;
  @Input() idHis: number;
  @Input() idCustom: number;
  @Input() infoAdd: any;
  Date: string;
  constructor(private updateCus: UpdateHealthIndexService) { }
  @Output() close = new EventEmitter<string>();

  closeUp() {
    this.close.emit('up');
  }
  ngOnInit() {
    this.Date = this.obUpDate.Date.substring(0, this.obUpDate.Date.length - 9);
  }
  updateData(newData) {
    this.obUpDate = newData;
    this.Date = this.obUpDate.Date.substring(0, this.obUpDate.Date.length - 9);
  }
  update(obAdd) {
    this.updateCus.updateHealthIndex(this.obUpDate.CusHCIndexId, this.idCustom, this.idHis, obAdd.value.Value, obAdd.value.Date).subscribe(data => this.closeUp());
  }

}
