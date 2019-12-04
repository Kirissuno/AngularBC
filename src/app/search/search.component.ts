import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() nombre:string;
  @Input() surname:string;
  @Output() fullName: EventEmitter<any> = new EventEmitter();

  public query:String;
  public result:String;

  constructor() { }

  ngOnInit() {

  }

  public sendFullName(){
    const fullNameAux = this.nombre + " " + this.surname;
    this.fullName.emit(fullNameAux);
  }

  public search(){
    if(this.query == undefined){
      this.result = `No has introducido nada`;
    }else{
      this.result = `Has buscado "${this.query}"`;
    }
    this.sendFullName();
  }

}
