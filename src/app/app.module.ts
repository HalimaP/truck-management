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
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { HomeComponent } from './home/home.component';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    CanvasJSAngularChartsModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    HttpClientModule,
    MatDatepickerModule 
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
