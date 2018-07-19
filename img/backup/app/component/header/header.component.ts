import { Component, OnInit } from '@angular/core';
import {Header} from '../../model/header';
import {HEADER} from '../../headers'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headers = HEADER;

  selectedHeader : Headers;
  
  
  constructor() { }

  ngOnInit() {}
  onSelect(headers1: Headers): void {
      this.selectedHeader = headers1;
    }
      
 
  

}
