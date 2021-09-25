import { Injectable } from '@angular/core';
import { Viajes } from './viajes.model';
import { HttpClient } from "@angular/common/http";
import { Empleados } from './empleados.model';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  constructor(private http:HttpClient) { }

  formData:Viajes = new Viajes();
  Emple:Empleados = new Empleados();

  readonly baseURL = 'http://localhost:52718/api/Viajes'
  readonly baseURLEmp = 'http://localhost:52718/api/Empleados'
  
  list : Viajes[];
  listEmp : Empleados[];
  
  nombresEmp: any[] = new Array<any>();
  apellidosEmp: any[] = new Array<any>();

  postViaje(){
    return this.http.post(this.baseURL, this.formData);
  }

  putViaje(){
    return this.http.put(`${this.baseURL}/${this.formData.viajesID}`, this.formData);
  }

  deleteViaje(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  async refreshlist(){
    this.nombresEmp=[];
    this.apellidosEmp=[];
    await this.http.get(this.baseURL)
      .toPromise()
      .then(res =>{ this.list = res as Viajes[];
      for(let element in this.list){
        let indexpos=this.listEmp.findIndex(x => 
          x.empleadosID==this.list[element].empleadosID);
          this.nombresEmp.push(this.listEmp[indexpos].nombre);
          this.apellidosEmp.push(this.listEmp[indexpos].apellido)
      }});
  }

  async listEmpleados(){
    await this.http.get(this.baseURLEmp)
    .toPromise()
    .then(
      res => {this.listEmp = res as Empleados[];
      console.log(res)
      });
  }
}
