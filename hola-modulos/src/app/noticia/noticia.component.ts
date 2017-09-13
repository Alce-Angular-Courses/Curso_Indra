import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  public textoBoton: string
  public esNoticiaFull: boolean

  constructor() { }

  ngOnInit() {
    this.textoBoton = "Mostrar"
    this.esNoticiaFull = false
  }

  cambiaVista() {
    this.esNoticiaFull = !this.esNoticiaFull
    this.textoBoton = this.esNoticiaFull ? "Ocultar" : "Mostrar"
  }

}
