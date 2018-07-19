import { Component, OnInit } from '@angular/core';
import { GetCustomerService } from 'src/app/service/get-customer.service';
import { error } from '@angular/compiler/src/util';
import { ToastrService } from 'ngx-toastr';
import { DeleteCardService } from 'src/app/service/delete-card.service';
@Component({
  selector: 'app-historical-medication',
  templateUrl: './historical-medication.component.html',
  styleUrls: ['./historical-medication.component.css']
})
export class HistoricalMedicationComponent implements OnInit {
  CardArrayData = [];
  DisplayCard = true;
  IdCustomer = 3;
  constructor(
    private GetCardService: GetCustomerService,
    private toastr: ToastrService,
    private DeleteCardService: DeleteCardService) { }

  ngOnInit() {
    this.LoadCardArrayData(this.IdCustomer);
  }

  LoadCardArrayData(IdCustomer: number) {
    // this.GetCardService.getCustomer(IdCustomer).subscribe(
    //   data => {
    //     this.CardArrayData = data;
    //   },
    //   (error => this.RequestError()));
    this.CardArrayData = [
      {
        "MedicalRecordId": 3,
        "Place": "BV Pháp Việt",
        "StartDate": "2018-02-05T00:00:00",
        "EndDate": "2018-02-08T00:00:00",
        "Symptom": null,
        "Diagnose": "Gãy tay trái",
        "Description": "Binh thuong",
        "Type": "Nội trú"
      },
      {
        "MedicalRecordId": 5,
        "Place": "BV Bạch Mai",
        "StartDate": "2017-03-04T00:00:00",
        "EndDate": "2017-05-02T00:00:00",
        "Symptom": "Ngữa, vùng ngứa có màu đỏ, viền có mụn nước",
        "Diagnose": "Nấm da",
        "Description": null,
        "Type": "Nội trú"
      }, {
        "MedicalRecordId": 3,
        "Place": "BV Pháp Việt",
        "StartDate": "2018-02-05T00:00:00",
        "EndDate": "2018-02-08T00:00:00",
        "Symptom": null,
        "Diagnose": "Gãy tay trái",
        "Description": null,
        "Type": "Nội trú"
      }, {
        "MedicalRecordId": 3,
        "Place": "BV Pháp Việt",
        "StartDate": "2018-02-05T00:00:00",
        "EndDate": "2018-02-08T00:00:00",
        "Symptom": null,
        "Diagnose": "Gãy tay trái",
        "Description": null,
        "Type": "cấp cứu"
      }
    ];
  }
  DeleteCard(IdCard: number) {
    if(!confirm("Bạn có chắc chắn muốn xóa không?")) return;
    this.DeleteCardService.DeleteCard(IdCard).subscribe(data => {
      this.Toastr("Xóa thành công ", "SUCCESS");
    }, (error => this.Toastr("Xóa không thành công", "ERROR")));
    this.LoadCardArrayData(this.IdCustomer);
  }
    OpenDetailCard(IdCard: number) {
    }
  Toastr(Message, Type) {
    switch (Type) {
      case "SUCCESS": this.toastr.success(Message, "Thông báo"); break;
      case "ERROR": this.toastr.error(Message, "Thông báo"); break;
      default: this.toastr.info(Message, "Thông báo"); break;
    }
  }
}
