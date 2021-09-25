import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ViajesComponent } from './viajes/viajes.component';

const routes: Routes=[
  {path: "prueba", component:EmpleadosComponent},
  {path: "", component:ViajesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
