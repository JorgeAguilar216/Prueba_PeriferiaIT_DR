import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { ViajesComponent } from './viajes/viajes.component';
import { ViajesFormComponent } from './viajes/viajes-form/viajes-form.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadosFormComponent } from './empleados/empleados-form/empleados-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ViajesComponent,
    ViajesFormComponent,
    EmpleadosComponent,
    EmpleadosFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  exports: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
