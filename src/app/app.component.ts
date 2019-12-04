import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularBootcamp';
  
  numeros:number[] = [1,2,3,4,5];
  aparece:boolean = false;
  public libro;
  public showFullName:String;

  constructor(){
    this.libro = {titulo:"Algo malo", anio:1992};
  }

  public getFullName($event){
    this.showFullName = $event;
  }

  cambiar(){
    this.aparece = !this.aparece;
  }
}
