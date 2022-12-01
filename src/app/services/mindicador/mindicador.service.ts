import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { $ } from 'protractor';
import { url } from 'inspector';


@Injectable({
  providedIn: 'root'
})
export class MindicadorService {

  urlEndPoint = 'https://mindicador.cl/api';

  constructor(private httpClient : HttpClient) { }

  Controller($scope, $http) {
    $http.get(this.urlEndPoint).success(function(data) {
        $scope.dailyIndicators =data;
    }).error(function(){
        console.log('error en la API');
    });
  }

  obtenerIndicadores(): Promise<any>{
   return new Promise((resolve, reject) => {
    this.httpClient.get(this.urlEndPoint).subscribe(data => {
      resolve(data);
    },error=>{
      reject(error);
    });
    });
  }

  obtenerIndicador(indicador: string,fecha : any): Promise<any>{
    return new Promise((resolve, reject) => {
     this.httpClient.get(this.urlEndPoint + '/' + indicador+'/'+ fecha).subscribe(data => {
       resolve(data);
     },error=>{
       reject(error);
     });
     });
   }



}
