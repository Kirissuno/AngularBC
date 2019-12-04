import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {
  par = [];
  public elements = [
    {nombre: "Juanma" , apellidos: "Conde García", edad: 23, direccion: {calle:"a", numero:9, codp:"41000"}},
    {nombre: "Robert" , apellidos: "Filip", edad: 22, direccion: {calle:"b", codp:"41020"}},
    {nombre: "Manuel" , apellidos: "Melero", edad: 23, direccion: {calle:"c", numero:218, codp:"41000"}},
    {nombre: "Okay" , apellidos: "OFF", edad: 20, direccion: {calle:"d", numero:58, codp:"410050"}}
  ];

  constructor() { }

  ngOnInit() {

  }
  resultado:string;
  ppt(){
    let ppta = ['piedra', 'papel','tijeras'];
    let num = Math.floor(Math.random() * 3);
    this.resultado = ppta[num];
  }

  getParidad($event){
    this.par.push($event);
  }

  borrar(){
    this.elements.pop();
  }

}
