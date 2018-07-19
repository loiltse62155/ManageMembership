import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DeleteHealthIndexService } from 'src/app/service/delete-health-index.service';
import { HistoryHealthIndexService } from 'src/app/service/history-health-index.service';

@Component({
  selector: 'app-item-history',
  templateUrl: './item-history.component.html',
  styleUrls: ['./item-history.component.css',
  ]
})
export class ItemHistoryComponent implements OnInit {
  @Input() index: number;
  @Output() showEdit = new EventEmitter<any>();
  @Output() showAdd = new EventEmitter();
  @Output() showGra = new EventEmitter<any>();
  @Input() infoAdd: any;
  constructor(private deleteService: DeleteHealthIndexService, private getService: HistoryHealthIndexService) {

  }
  showUpIndex: number;

  arrHis = [];
  label = [];
  data = [];
  ob: any;
  all = true;
  statusOfChart = [];
  removeHeatlCare(id) {
    this.deleteService.deleteHealthIndex(id).subscribe(data => {
      this.loadData(this.index);
      console.log("load new deled");
      console.log(data);
  });
  }

  showGraRun() {
    this.solveData();
    this.showGra.emit(this.ob);
  }
  showAddrun() {
    this.showAdd.emit();
  }
  loadData(idHis) {
    console.log("load data run");
    this.statusOfChart = [];
    this.showUpIndex = -1;
    this.getService.getHistoryHealthCareIndex(idHis).subscribe(data => {
      this.arrHis = data;
      this.all = true;
      for (var i = 0; i < this.arrHis.length; i++) {
        this.statusOfChart.push(true);
      }
    });
  }
  ngOnInit() {
    this.loadData(this.index);
   
  }
  solveData() {
    this.label = [];
    this.data = [];
    for (var i = 0; i < this.arrHis.length; i++) {
      if (this.statusOfChart[i]) {
        var tm = (this.arrHis[i].Date).substring(0, 10);
        this.label.push(tm);
        this.data.push(this.arrHis[i].Value);
      }
    }
    this.ob = { 'label': this.label, 'data': this.data };
  }
  showEditRun(ob, index) {
    if (this.showUpIndex == index) {
      this.showUpIndex = -1;
    } else {
      this.showUpIndex = index;
    }
    
    this.showEdit.emit(ob);
  }
  toggleChart(e, index) {
    if (e.target.checked) {
      this.statusOfChart[index] = true;
    } else {
      this.statusOfChart[index] = false;
      this.all = false;
    }
  }

  choiceAll(e) {
    for (var i = 0; i < this.arrHis.length; i++) {
      this.statusOfChart[i] = (e.target.checked);
    }
  }
}
