import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EditAllergyComponent } from '../../component/edit-allergy/edit-allergy.component';

@Component({
  selector: 'app-allergy',
  templateUrl: './allergy.component.html',
  styleUrls: ['./allergy.component.css'],
 
})
export class AllergyComponent implements OnInit {
@ViewChild(EditAllergyComponent) child:EditAllergyComponent;
  
  constructor() { }

  @Input() id: number;
  ngOnInit() {
    
  }

}
