import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDatepickerToggle } from '@angular/material/datepicker';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
	
	minDate = new Date(2023, 0, 3); 
maxDate = new Date(2023, 0, 15);
 
	range: FormGroup = new FormGroup({
		 start: new FormControl<Date | null>(null),
  end: new FormControl<Date | null>(null),
	  });
  chartOptions = {
		animationEnabled: true,
		theme: "light2",
		title: {
			// text: "New York Climate - 2021"
		},
		axisX: {
			valueFormatString: "MMM",
			intervalType: "month",
			interval: 1
		},
		axisY: {
		// 	title: "Temperature",
		//   suffix: "°F"
		},
		toolTip: {
			// shared: true
		},
		legend: {
			cursor: "pointer",
			itemclick: function(e: any){
				if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
					e.dataSeries.visible = false;
				} else{
					e.dataSeries.visible = true;
				}
				e.chart.render();
			}
		},
		data: [
			{
				name: "Total numer of trucks",
				legendMarkerBorderColor: "	#E8E8E8",
				nameColor: 'gray',
					legendMarkerBorderThickness: 9,
					legendMarkerType: 'square',
				type:"line",
				
				lineThickness: 1,
				
				showInLegend: true,
				yValueFormatString: "",
				dataPoints: [		
					{ x: new Date(2021, 0, 1), y: 17, lineColor:"red", markerColor: "red", markerType: "circle" },
					{ x: new Date(2021, 1, 1), y: 18 },
					{ x: new Date(2021, 6, 1), y: 10 },
					
				]
			},
			
			{
			name: "Asigned trucks",
			legendMarkerBorderColor: "#4847ef",
				legendMarkerBorderThickness: 9,
				legendMarkerType: 'square',
			type:"line",
			
			lineThickness: 1,
			
			showInLegend: true,
			yValueFormatString: "",
			dataPoints: [		
				{ x: new Date(2021, 0, 1), y: 17, lineColor:"red", markerColor: "red", markerType: "circle" },
				{ x: new Date(2021, 1, 1), y: 18 },
				{ x: new Date(2021, 6, 1), y: 10 },
				
			]
		},
		{
			legendMarkerBorderColor: "orange",
				legendMarkerBorderThickness: 9,
				legendMarkerType: 'square',
			type: "line",
			name: "Loaded trucks",
			showInLegend: true,
			lineThickness: 1,
			yValueFormatString: "",
			dataPoints: [
				{ x: new Date(2021, 0, 1), y: 20 },
				{ x: new Date(2021, 1, 1), y: 32 },
				{ x: new Date(2021, 11, 1), y: 24 }
			]
		}]
	}	
  constructor() {

   }

   ngOnInit(): void {

	// Check if there are saved dates in local storage
	const savedStartDate = localStorage.getItem('startDate');
	const savedEndDate = localStorage.getItem('endDate');
  
	// Set the form control values if dates are found in local storage
	if (savedStartDate && savedEndDate) {
	  this.range.controls['start'].setValue(new Date(savedStartDate));
	  this.range.controls['end'].setValue(new Date(savedEndDate));
	}
  
	// Subscribe to form control value changes and update local storage
	this.range.valueChanges.subscribe((value) => {
	  const startDate = value.start;
	  const endDate = value.end;
	  if (startDate && endDate) {
		localStorage.setItem('startDate', startDate.toISOString());
		localStorage.setItem('endDate', endDate.toISOString());
	  }
	});
  }
 
  
}








  

