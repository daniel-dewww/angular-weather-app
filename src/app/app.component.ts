import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  
  weather = undefined;
  public clima = [] ;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this. getHora();
  }
  

  getWeather(cityName: string) {
    this.weatherService
      .getWeather(cityName )
      .subscribe(
        res => {
          console.log(res);
          this.weather =res;
          
        },
        err => {
          console.log(err);
        }
      );
  }

  submitLocation(cityName: HTMLInputElement) {
   
    if (cityName.value ) {
      this.getWeather(cityName.value);

      cityName.value = '';
      
    }
    
    else {
      alert('Please. Insert some values');
    }
    cityName.focus();
    return false;
  }
  getHora(){
    const date = new Date();
    const hour = date.getHours();
    if (hour > 6 && hour < 20) {
      //Day time
     console.table("day");
  
  } else {
      //Night time
     console.table("night");
  }
  }
 
}
