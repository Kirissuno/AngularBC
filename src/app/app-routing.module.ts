import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { TablasComponent } from './tablas/tablas.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'tablas', component: TablasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
