import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Viajes } from '../shared/viajes.model';
import { ViajesService } from '../shared/viajes.service';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styles: [
  ]
})
export class ViajesComponent implements OnInit {

  constructor(public service: ViajesService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.listEmpleados();
    this.service.refreshlist();
  }

  populateForm(selectRecord:Viajes){
    this.service.formData = Object.assign({}, selectRecord);
  }
  
  onDelete(id:number){
    if(confirm('¿Estas seguro de eliminar este registro?'))
    {
    this.service.deleteViaje(id)
    .subscribe(
      res=>{
        this.service.refreshlist();
        this.toastr.error("Eliminado exitosamente", 'Registro de viajes Entregado S.A.S.')
      },
      err =>{console.log(err)}
    )
    }
  }
}
