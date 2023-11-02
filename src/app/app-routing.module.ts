import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BarchartComponent } from './graph-list/barchart/barchart.component';
import { ListComponent } from './graph-list/list/list.component';

const routes: Routes = [
  { path: 'cha', component:BarchartComponent  }, // Default route
  { path: 'about', component:ListComponent }, // Example route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
