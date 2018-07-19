import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-manage-card-detail',
  templateUrl: './manage-card-detail.component.html',
  styleUrls: ['./manage-card-detail.component.css']
})
export class ManageCardDetailComponent implements OnInit {
  @Input() CardData;
  @Output() OpenDetailCard = new EventEmitter<number>(); 
  @Output() DeleteCard = new EventEmitter<number>(); 

  constructor() { }
  OpenDetailCardByClickEvent(IdCard: number) {
    this.OpenDetailCard.emit(IdCard);
  }
  DeleteCardByClickEvent(IdCard: number) {
    this.DeleteCard.emit(IdCard);
  }
  ngOnInit() {
  }

}
