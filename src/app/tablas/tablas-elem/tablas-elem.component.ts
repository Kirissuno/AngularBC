import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tablas-elem',
  templateUrl: './tablas-elem.component.html',
  styleUrls: ['./tablas-elem.component.css']
})
export class TablasElemComponent implements OnInit {
  @Input() direccion;
  @Output() paridad: EventEmitter<any> = new EventEmitter();

  constructor() {
   }

  ngOnInit() {
    let numero = (this.direccion.numero)? this.direccion.numero: 0;
    this.paridad.emit(numero%2);
  }

}
