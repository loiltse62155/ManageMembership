import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetHealthCareService } from 'src/app/service/get-health-care.service';


@Component({
  selector: 'app-basic-index',
  templateUrl: './basic-index.component.html',
  styleUrls: ['./basic-index.component.css',
]
})
export class BasicIndexComponent implements OnInit {
  @Output() loadHis = new EventEmitter<any>();
  arrHC = [];
  constructor(private getHealthCare: GetHealthCareService) { }

  ngOnInit() {
    this.loadHistoryFromServer();
  }
  loadHistoryFromServer() {
    this.getHealthCare.getHealthCareIndex(1).subscribe(data => { this.arrHC = data; console.log(data); }, (error => { this.arrHC = null; }));
  }
  showHistory(idHC: any, index: number) {
    this.loadHis.emit({
      'index': idHC, 'info': { Unit: this.arrHC[index].Unit, Name: this.arrHC[index].HealthCareIndexName, Type: "number" }
    });
  }

}
