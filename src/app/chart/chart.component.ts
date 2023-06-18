import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDatepickerToggle } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faWrench, faUser} from '@fortawesome/free-solid-svg-icons';
import { faCity } from '@fortawesome/free-solid-svg-icons';


// Ostatak koda komponente...


// Ostatak koda komponente...


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
	faWrench = faWrench;
	faUser = faUser;
	minDate = new Date(2023, 0, 3); 
maxDate = new Date(2023, 0, 15);
 
	range: FormGroup = new FormGroup({
		 start: new FormControl<Date | null>(null),
  end: new FormControl<Date | null>(null),
	  });
	  items = [
		{
		  mainTitle: 'Dealership',
		  description: 'Description 1',
		  faIcon:'',
		  matIcon: 'build',
		  firstDivValues: {
			title: 'Trucks in dealership',
			withDriver: 5,
			noDriver: 1,
			value: 7,
			dailyAverage: 12
		  }
		},
		{
		  mainTitle: 'Shop',
		  description: 'Description 2',
		  faIcon: '',
		  matIcon: 'person'
		},
		{
		  mainTitle: 'Road service',
		  description: 'Description 3',
		  faIcon:'',
		  matIcon: 'change_history'
		},
		{
		  mainTitle: 'Yard',
		  description: 'Description 2',
		  faIcon:'',
		  matIcon: 'apartment'
		},
		{
		  mainTitle: 'Recovery',
		  description: 'Description 2',
		  faIcon:'',
		  matIcon: 'undo'
		},
		{
		  mainTitle: 'Abandoned',
		  description: 'Description 2',
		  faIcon:'',
		  matIcon: 'error'
		},
		
	
	  ];
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
  constructor(private dialog: MatDialog, private library: FaIconLibrary ) {
	library.addIcons(faTools, faWrench, faUser,faCity);
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
 
  openDialog() {
	const dialogRef = this.dialog.open(ModalComponent, {
		panelClass: 'right-dialog-container',
	  // Set dialog options if needed
	});
  
	// Subscribe to the dialog's afterClosed event if you need to handle the result
	dialogRef.afterClosed().subscribe(result => {
	  // Handle the result if needed
	});
  }
}








  

