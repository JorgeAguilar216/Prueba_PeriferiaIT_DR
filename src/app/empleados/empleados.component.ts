import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Empleados } from '../shared/empleados.model';
import { EmpleadosService } from '../shared/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: [
  ]
})
export class EmpleadosComponent implements OnInit {

  constructor(public service: EmpleadosService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshlist();
  }

  populateForm(selectRecord:Empleados){
    this.service.formData = Object.assign({}, selectRecord);
  }

  onDelete(id:number){
    if(confirm('¿Estas seguro de eliminar este registro?'))
    {
    this.service.deleteEmpleados(id)
    .subscribe(
      res=>{
        this.service.refreshlist();
        this.toastr.error("Eliminado exitosamente", 'Registro de empleados Entregado S.A.S.')
      },
      err =>{console.log(err)}
    )
    }
  }

}
