import { Injectable } from '@angular/core';
import { Empleados } from './empleados.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http:HttpClient) { }

  formData:Empleados = new Empleados();
  readonly baseURL = 'http://localhost:52718/api/Empleados'
  list : Empleados[];

  postEmpleados(){
    return this.http.post(this.baseURL, this.formData);
  }

  putEmpleados(){
    return this.http.put(`${this.baseURL}/${this.formData.empleadosID}`, this.formData);
  }

  deleteEmpleados(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshlist(){
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as Empleados[]);
  }
}
