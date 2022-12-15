import { Component, OnInit } from '@angular/core';

import {OpenweathermapService } from '../../services/openweathermap/openweathermap.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  pageTitle='Clima en tu ciudad';
  isNotHome=true;

  weather: any;

  constructor(private OpenweatherService: OpenweathermapService) { }

  ngOnInit() {
  }

  getWeather(cityName: string, countryName: string) {

    this.OpenweatherService.getWeather(cityName, countryName)
    .subscribe(
      res => {
        console.log(res);
        this.weather = res},
      err => console.log(err)
      )
  }

  submitLocation(cityName: HTMLInputElement, countryName: HTMLInputElement) {
    if (cityName.value && countryName.value) {

    this.getWeather(cityName.value, countryName.value);

    cityName.value = '';
    countryName.value = '';
    } else {
      alert('Porfavor ingrese una ciudad y un país');
    }
    cityName.focus();

    return false;
  }

}
