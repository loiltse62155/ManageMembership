import { Component, OnInit, Input, Output, EventEmitter,Pipe, PipeTransform } from '@angular/core';
import { AllergyValueService } from '../../service/allergy-value.service';
import { AllergyService } from '../../service/allergy.service';
import { CustomerAllergyService } from '../../service/customer-allergy.service';
import { Allergy } from '../../model/allergy.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {MulSelectComponent} from '../mul-select/mul-select.component'
@Component({
  selector: 'app-edit-allergy',
  templateUrl: './edit-allergy.component.html',
  styleUrls: ['./edit-allergy.component.css',

  ],
  providers: [AllergyValueService,
    AllergyService,
    CustomerAllergyService,
  ]
})

export class EditAllergyComponent implements OnInit {
  @Input() index: number;
  @Input() newAllergy: string;
  @Input() addField: string;
  @Input() updateField: string;
  @Output() showEdit = new EventEmitter<any>();
  select2:string[];
  showAddAllergyType: boolean;
  showAddAllergy: boolean;
  showUpdateAllergy: boolean;
  allergyValue = [];
  customerAllergy = [];
  allergy = [];
  CusAllergy = [];
  CusAllergyValue = [];
  multiselectAllergy = [];
  allergyItem: Allergy;
  id1: number;
  clickedItem: string;
  clickedItemID: number;
  addAllType: number;
  customerID = 1;
  check: boolean;

  constructor(private allergyValueService: AllergyValueService,
    private allergyService: AllergyService,
    private customerAllergyService: CustomerAllergyService,
    private toastr: ToastrService,
    
  ) {
    this.showAddAllergyType = false;
    this.showUpdateAllergy = false;
    this.showAddAllergy = false;
    this.check = false;
  }
  addToMuiltiselect(){
    for(let i = 0; i < this.allergyValue.length; i++){
      this.multiselectAllergy.push(this.allergyValue[i].Value);
    }
  }

  ShowHideAddAllergyType() {
    if (this.showAddAllergyType == false) {
      this.showAddAllergyType = true;
    } else {
      this.showAddAllergyType = false;
    }
  }
  ShowUpdateAllergy() {
    if (this.showUpdateAllergy == false) {
      this.showUpdateAllergy = true;
    } else {
      this.showUpdateAllergy = false;
    }
  }
  ShowHideAddAllergy() {
    if (this.showAddAllergy == false) {
      this.showAddAllergy = true;
    } else {
      this.showAddAllergy = false;
    }

  }
  checkDuplicate(id: number) {
    for (let i = 0; i < this.CusAllergy.length; i++) {
      if (id === this.CusAllergy[i].AllergyId) {

        return true;
      }
    }
    return false;
  }
  CreateArrayOfCusAllergy(arr = []) {

    for (let i = 0; i < arr.length; i++) {

      if (this.checkDuplicate(arr[i].AllergyId) == false) {
        this.CusAllergy.push(arr[i]);
        
        
      }
    }
      return this.CusAllergy;
  }
  GetCusAllergyValue(AllergyId: number) {
    let CusAllergyValue1 = []
    //this.CusAllergyValue = [];
    for (let i = 0; i < this.customerAllergy.length; i++) {
      if (AllergyId === this.customerAllergy[i].AllergyId) {
        CusAllergyValue1.push(this.customerAllergy[i]);
      }
    }
    return CusAllergyValue1;
  }
  toggle(event) {
    console.log('ahihi' + event.target.id);
    this.clickedItem = event.target.id;
    this.clickedItemID = event.target.name
  }
  toggle2(event) {
    console.log('ahihi' + event.target.value);
    this.addAllType = event.target.value;
    console.log(this.addAllType);
  }

  askForDelete(Id) {
    if (confirm('Bạn có chắc chắn muốn xóa không?')) {
      this.removeAllergy(Id);
    } else {
      this.toastr.warning("Xóa không thành công", "Thông báo")
    }
  }

  askForDeleteAllergyType(Id) {
    let allId: number;
    if (confirm('Khi xóa loại dị ứng sẽ xóa tất cả các dị ứng trong loại đó. Bạn có chắc chắn muốn xóa không?')) {
      for (let i = 0; i < this.customerAllergy.length; i++) {
        if (Id === this.customerAllergy[i].AllergyId) {
          this.removeAllergy(this.customerAllergy[i].Id);
         allId = this.customerAllergy[i].AllergyId;
        }
      }
      this.refreshData();
      this.GetCusAllergyValue(allId);
     
    }


  }


  @Input() id: number;
  ngOnInit() {
    this.allergyValueService.getAllergyValueList().subscribe(data => { this.allergyValue = data; console.log(data); }, (error => this.allergyValue = null));
    this.allergyService.getAllergyList().subscribe(data => { this.allergy = data; console.log(data); }, (error => this.allergy = null));
    this.customerAllergyService.getCustomerAllergyListByCustomerId(1).subscribe(data => { this.customerAllergy = data; console.log(data); },
      (error => this.customerAllergy = null));
    this.CreateArrayOfCusAllergy(this.customerAllergy);
    this.addToMuiltiselect();
    console.log(this.multiselectAllergy);
    this.check = true;
    
  }
  //   private subscribeToData(): void {
  //     this.timerSubscription = Observable.timer(5000).first().subscribe(() => this.refreshData());
  // }
  refreshData(): void {
    this.allergy = [];
    this.allergyValueService.getAllergyValueList().subscribe(data => { this.allergyValue = data; console.log(data); }, (error => this.allergyValue = null));
    this.allergyService.getAllergyList().subscribe(data => { this.allergy = data; console.log(data); }, (error => this.allergy = null));
    this.customerAllergyService.getCustomerAllergyListByCustomerId(1).subscribe(data => { this.customerAllergy = data; console.log(data); },
      (error => this.customerAllergy = null));
    // this.CreateArrayOfCusAllergy(this.customerAllergy);
    this.resetForm;

  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.addField = '';
    this.updateField = '';

  }

  add(obAdd) {
    console.log(obAdd.value.Value + ' ' + obAdd.value.CustomerId + ' ' + obAdd.value.AllergyId);
    this.customerAllergyService.createCustomerAllergy(obAdd.value.Value, obAdd.value.CustomerId, obAdd.value.AllergyId).subscribe(data => {
      console.log(data);
      this.toastr.success('Bạn đã thêm dị ứng ' + '"' + obAdd.value.Value + '"' + ' thành công!', 'Thành Công');
      
      this.refreshData();

    });
    this.resetForm();
  }

  addType(obAdd) {
    console.log(obAdd.value.Value + ' ' + obAdd.value.CustomerId + ' ' + obAdd.value.AllergyId);
    this.customerAllergyService.createCustomerAllergy("", this.customerID, this.addAllType).subscribe(data => {
      console.log(data);
      this.toastr.success('Bạn đã thêm thành công!', 'Thành Công');
      this.refreshData();
    });
    this.resetForm();
  }


  removeAllergy(id) {
    this.customerAllergyService.deleteCustomerAllergyById(id).subscribe(data => {
      console.log(data);

      this.toastr.error('Bạn đã xóa thành công', "Thành công");
      this.refreshData();

    });
    this.resetForm();
  }

  update(obAdd) {
    console.log(this.clickedItemID + "" + obAdd.value.Value1 + "" + obAdd.value.CustomerId + "" + obAdd.value.AllergyId)
    this.customerAllergyService.updateAllergyById(this.clickedItemID, obAdd.value.Value1, obAdd.value.CustomerId, obAdd.value.AllergyId).subscribe(data => {
      console.log(data);
      this.toastr.info('Bạn đã chỉnh sửa thành công', "Thành công");
      this.refreshData();

    });
    this.resetForm();
  }

}

