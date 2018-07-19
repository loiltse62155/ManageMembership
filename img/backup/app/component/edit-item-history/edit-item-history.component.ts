import { Component, OnInit ,Input } from '@angular/core';
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
  Date: string;
  constructor(private updateCus: UpdateHealthIndexService) { }

  ngOnInit() {


    this.Date = this.obUpDate.Date.substring(0, this.obUpDate.Date.length - 9);
    console.log(this.idHis + "idHis" + this.idCustom+"com");
  }
  update(obAdd) {
    this.updateCus.updateHealthIndex(this.obUpDate.CusHCIndexId, this.idCustom, this.idHis, obAdd.value.Value, obAdd.value.Date).subscribe(data => console.log(data));
  }

}
