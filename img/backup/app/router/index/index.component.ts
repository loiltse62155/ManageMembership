import { Component, OnInit } from '@angular/core';
import { HistoryHealthIndexService } from 'src/app/service/history-health-index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  indexHis : number;
  healthUp: any;
  showHis = false;
  showAdd = false;
  showUp = false;
  showGrap = false;
  idCus = 1;
  infoAdd: any;
  constructor(private getHisHealthCare: HistoryHealthIndexService) { }
  ngOnInit() {
  }

  showEditHealth(ob: any) {
    this.healthUp = ob;
    this.showUp = !this.showUp;
  }
  showAddHealth() {
    this.showAdd = !this.showAdd;
  }
  showGraHealth() {
    this.showGrap = !this.showGrap;
  }
  loadHistory(index: any) {
    this.indexHis = index.index;
    this.infoAdd = index.info;
    this.showHis = !this.showHis;
  }

}
