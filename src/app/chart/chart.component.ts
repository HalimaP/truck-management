import { Component, Input, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { MatDatepickerToggle } from "@angular/material/datepicker";
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from "../modal/modal.component";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { faWrench, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"],
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
      mainTitle: "Dealership",
      description: "Description 1",
      faIcon: "",
      matIcon: "build",
      firstDivValues: {
        title: "Trucks in Shop",
        withDriver: 5,
        noDriver: 1,
        value: 7,
        dailyAverage: 12,
      },
    },
    {
      mainTitle: "Shop",
      description: "Description 2",
      faIcon: "",
      matIcon: "person",
	  firstDivValues: {
        title: "Roadside assistance",
        withDriver: 7,
        noDriver: 4,
        value: 11,
        dailyAverage: 19,
      },
    },
    {
      mainTitle: "Road service",
      description: "Description 3",
      faIcon: "",
      matIcon: "change_history",
	  firstDivValues: {
        title: "Roadside assistance",
        withDriver: 5,
        noDriver: 2,
        value: 7,
        dailyAverage: 19,
      },
    },
    {
      mainTitle: "Yard",
      description: "Description 2",
      faIcon: "",
      matIcon: "apartment",
	  firstDivValues: {
        title: "Trucks at the Yard",
        withDriver: 7,
        noDriver: 4,
        value: 11,
        dailyAverage: 19,
      },
    },
    {
      mainTitle: "Recovery",
      description: "Description 2",
      faIcon: "",
      matIcon: "undo",
	  firstDivValues: {
        title: "Trucks in Recovery status",
        withDriver: 7,
        noDriver: 6,
        value: 18,
        dailyAverage: 19,
      },
	  
    },
    {
      mainTitle: "Abandoned",
      description: "Description 2",
      faIcon: "",
      matIcon: "error",
	  firstDivValues: {
        title: "Abandoned Trucks",
        withDriver: 7,
        noDriver: 11,
        value: 7,
        dailyAverage: 19,
      },
    },
  ];
  chartOptions = {
    animationEnabled: true,
    theme: "light2",
    title: {},
    axisX: {
      valueFormatString: "MMM",
      intervalType: "month",
      interval: 1,
    },
    axisY: {},
    toolTip: {},
    legend: {
      cursor: "pointer",
      itemclick: function (e: any) {
        if (
          typeof e.dataSeries.visible === "undefined" ||
          e.dataSeries.visible
        ) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      },
    },
    data: [
      {
        name: "Total numer of trucks",
        legendMarkerBorderColor: "	#E8E8E8",
        nameColor: "gray",
        legendMarkerBorderThickness: 9,
        legendMarkerType: "square",
        type: "line",

        lineThickness: 1,

        showInLegend: true,
        yValueFormatString: "",
        dataPoints: [],
      },

      {
        name: "Asigned trucks",
        legendMarkerBorderColor: "#4847ef",
        legendMarkerBorderThickness: 9,
        legendMarkerType: "square",
        type: "line",

        lineThickness: 1,

        showInLegend: true,
        yValueFormatString: "",
        dataPoints: [
          {
            x: new Date(2023, 0, 1),
            y: 10,
            lineColor: "#42424278",
            markerColor: "orange",
            markerType: "circle",
          },
          {
            x: new Date(2023, 3, 3),
            y: 14,
            lineColor: "#42424278",
            markerColor: "orange",
            markerType: "circle",
          },
          {
            x: new Date(2023, 5, 3),
            y: 12,
            lineColor: "#42424278",
            markerColor: "orange",
            markerType: "circle",
          },
          {
            x: new Date(2023, 7, 3),
            y: 10,
            lineColor: "#42424278",
            markerColor: "orange",
            markerType: "circle",
          },
          {
            x: new Date(2023, 9, 3),
            y: 9.5,
            lineColor: "#42424278",
            markerColor: "orange",
            markerType: "circle",
          },
          {
            x: new Date(2023, 11, 3),
            y: 11,
            lineColor: "#42424278",
            markerColor: "orange",
            markerType: "circle",
          },
        ],
      },
      {
        legendMarkerBorderColor: "orange",
        legendMarkerBorderThickness: 9,
        legendMarkerType: "square",
        type: "line",
        name: "Loaded trucks",
        showInLegend: true,
        lineThickness: 1,
        yValueFormatString: "",
        dataPoints: [
          {
            x: new Date(2023, 0, 1),
            y: 17,
            lineColor: "gray",
            markerColor: "blue",
            markerType: "circle",
          },
          {
            x: new Date(2023, 2, 3),
            y: 20,
            lineColor: "gray",
            markerColor: "blue",
            markerType: "circle",
          },
          {
            x: new Date(2023, 4, 3),
            y: 16,
            lineColor: "gray",
            markerColor: "blue",
            markerType: "circle",
          },
          {
            x: new Date(2023, 6, 3),
            y: 18,
            lineColor: "gray",
            markerColor: "blue",
            markerType: "circle",
          },
          {
            x: new Date(2023, 8, 3),
            y: 19.5,
            lineColor: "gray",
            markerColor: "blue",
            markerType: "circle",
          },
          {
            x: new Date(2023, 10, 3),
            y: 22,
            lineColor: "gray",
            markerColor: "blue",
            markerType: "circle",
          },
          {
            x: new Date(2023, 11, 3),
            y: 17,
            lineColor: "gray",
            markerColor: "blue",
            markerType: "circle",
          },
        ],
      },
    ],
  };
  constructor(private dialog: MatDialog, private library: FaIconLibrary) {
    library.addIcons(faTools, faWrench, faUser, faCity);
  }

  ngOnInit(): void {
    // Check if there are saved dates in local storage
    const savedStartDate = localStorage.getItem("startDate");
    const savedEndDate = localStorage.getItem("endDate");

    // Set the form control values if dates are found in local storage
    if (savedStartDate && savedEndDate) {
      this.range.controls["start"].setValue(new Date(savedStartDate));
      this.range.controls["end"].setValue(new Date(savedEndDate));
    }

    // Subscribe to form control value changes and update local storage
    this.range.valueChanges.subscribe((value) => {
      const startDate = value.start;
      const endDate = value.end;
      if (startDate && endDate) {
        localStorage.setItem("startDate", startDate.toISOString());
        localStorage.setItem("endDate", endDate.toISOString());
      }
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      panelClass: "right-dialog-container",
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
