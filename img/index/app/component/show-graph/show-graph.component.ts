import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-show-graph',
  templateUrl: './show-graph.component.html',
  styleUrls: ['./show-graph.component.css']
})
export class ShowGraphComponent implements OnInit {
  chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  }

  labels = [];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData = [
    {
      label: '',
      data:[] 
    }
  ];
  @Input() dataG:any;
  constructor() {
  }

  // ADD CHART OPTIONS. 
 

  // CHART COLOR.
  colors = [
    { // 1st Year.
      backgroundColor: 'rgba(77,83,96,0.2)'
    }
  ]
  
  // CHART CLICK EVENT.
  onChartClick(event) {
    console.log(event);
  }
  ngOnInit() {
    console.log(this.dataG.data[0]);
    this.chartData[0].data = this.dataG.data;
    this.labels = this.dataG.label;
  }

}
