import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular material 
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,  
    FormsModule,    
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
   
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
