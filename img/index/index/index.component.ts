import { Component, OnInit, ViewChild } from '@angular/core';
import { HistoryHealthIndexService } from 'src/app/service/history-health-index.service';
import { ItemHistoryComponent } from 'src/app/component/item-history/item-history.component';
import { EditItemHistoryComponent } from 'src/app/component/edit-item-history/edit-item-history.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  @ViewChild(ItemHistoryComponent) child: ItemHistoryComponent;
  @ViewChild(EditItemHistoryComponent) childEdit: EditItemHistoryComponent;
  indexHis = -1;
  indexEdit = -1;
  healthUp: any;
  showHis = false;
  showAdd = false;
  showUp = false;
  showGrap = false;
  idCus = 1;
  graphData : any;
  infoAdd: any;
  constructor(private getHisHealthCare: HistoryHealthIndexService) { }
  ngOnInit() {
  }
  close(request: string) {
    if (request == "his") {
      this.showHis = false;
    }
    if (request == "add") {
      this.showAdd = false;
      if (this.child != null) {
        this.child.loadData(this.indexHis);
      }
    }
    if (request == "up") {
      if (this.child != null) {
        this.child.loadData(this.indexHis);
      }
      this.showUp = false;

    }
    if (request == "grap") {
      this.showGrap = false;
    }
  }
  showEditHealth(ob: any) {
    
    if (this.indexEdit == -1) {
      this.showUp = true;
      this.indexEdit = ob.CusHCIndexId;
      this.healthUp = ob;
    } else {
      if (this.indexEdit == ob.CusHCIndexId) {
        this.showUp = false;
        this.indexEdit = -1;
      } else {
        if (this.childEdit != null)
        this.childEdit.updateData(ob);
        if (this.showUp = true) {
          this.indexEdit = ob.CusHCIndexId;
          this.healthUp = ob;
        }
      }
    }
  }
  showAddHealth() {
    this.showAdd = !this.showAdd;
  }
  showGraHealth(ob:any) {
    this.graphData = ob;
    this.showGrap = !this.showGrap;
  }
  loadHistory(index: any) {
    if (this.indexHis == -1) {
      this.showHis = true;
      this.indexHis = index.index;
      this.infoAdd = index.info;
    } else {
      if (this.indexHis == index.index) {
        this.showHis = false;
        this.indexHis = -1;
      } else {
        if (this.showHis = true) {
          this.child.loadData(index.index);
          this.indexHis = index.index;
          this.infoAdd = index.info;
          this.showUp = false;
          this.showAdd = false;
          this.showGrap = false;

        }
      }
    }
    
   
  
  }

}
