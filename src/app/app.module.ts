import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChartComponent } from './chart/chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';

import { HomeComponent } from './home/home.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChartComponent,
    HomeComponent
  ],
  imports: [
    MatNativeDateModule ,
    MatDatepickerModule ,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    CanvasJSAngularChartsModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule,
    BsDatepickerModule,
    FormsModule,
    MatFormFieldModule,
 ReactiveFormsModule,
    FormsModule,
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    // Register the custom SVG icon
    this.matIconRegistry.addSvgIcon(
      'calendar-dots',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/calendar-dots.svg')
    );
  }
}
