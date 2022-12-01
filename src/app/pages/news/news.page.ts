import { Component, OnInit } from '@angular/core';
import { MindicadorService } from 'src/app/services/mindicador/mindicador.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  pageTitle='Noticias';
  listadoIndicadores: any;
  indicadorEuro: any;
  indicadorDolar: any;
  valorEnEuro: number;
  valorEnDolar:number;
  valor : number=0;


  constructor(public _services:MindicadorService) {
    this.listaIndicadores();
    this.listaIndicadorEuro();
    this.listaIndicadorDolar();
   }

   listaIndicadores(){
    this._services.obtenerIndicadores().then(data=>{
      this.listadoIndicadores=data;
      console.log(this.listadoIndicadores);
    });
  }

  listaIndicadorEuro(){
    this._services.obtenerIndicador('euro','4-11-2022').then(data=>{
      this.indicadorEuro=data.serie[0].valor;
      console.log(this.indicadorEuro);
    });
  }

  listaIndicadorDolar(){
    this._services.obtenerIndicador('dolar','4-11-2022').then(data=>{
      this.indicadorDolar=data.serie[0].valor;
      console.log(this.indicadorDolar);
    });
  }

  calcular(){
    this.valorEnEuro=this.valor/this.indicadorEuro;
    console.log(this.valorEnEuro);
    this.valorEnDolar=this.valor/this.indicadorDolar;
    console.log(this.valorEnDolar);
  }



  ngOnInit() {
  }

}
