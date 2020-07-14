import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './files/home.component';
import { PiechartComponent } from './files/piechart.component';


const routes: Routes = [
   {path: 'home',  component: HomeComponent},
   {path: 'piechart',  component: PiechartComponent},
   {path: '',  redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
