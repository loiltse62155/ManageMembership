import { Component,   Input, Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-mul-select',
  templateUrl: './mul-select.component.html',
  styleUrls: ['./mul-select.component.css']
})
export class MulSelectComponent implements OnInit {
  @Input() value;
  @Input() arr:string[];
  //arr = ["Ngo gia huy", "Ngo thi kieu trang", "Cao van sam", "Nguyen thi manh hien", "cao van lau"];
  focus = false;
  @Input() select:string[];
  //select = [];
  seHover = "";
  search;
  mymodel: string;
  a = ["sdf", "sdfsdf", "sdgsdg"]
  constructor() {
  }


  selected(index) {
    this.seHover = index;
  }
  pushNew(value) {
    if (value != null && value != "") {
      this.select.push(value);
      this.search = "";
    }

  }

  clickToDelete(id){
    this.select.splice(id, 1);
  
  }

  finish() {
    if (this.seHover != "") {
      this.select.push(this.seHover);
      this.search = "";

    }
    this.focus = false;
  }
  valuechange(value: string) {
    if (value.length == 0) {
      if (this.select.length > 0) {
        this.select.splice(this.select.length - 1, 1);
      }
    }
  }
  ngOnInit() {
  }

}
