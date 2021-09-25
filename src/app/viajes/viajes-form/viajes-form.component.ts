import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Viajes } from 'src/app/shared/viajes.model';
import { ViajesService } from 'src/app/shared/viajes.service';

@Component({
  selector: 'app-viajes-form',
  templateUrl: './viajes-form.component.html',
  styles: [
  ]
})
export class ViajesFormComponent implements OnInit {

  constructor(public service:ViajesService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.listEmpleados();
  }

  onSubmit(form:NgForm){
    if(this.service.formData.viajesID==0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  onChange(id:number){
    let indexposc=this.service.listEmp.findIndex(x=>x.empleadosID==id);
  }

  insertRecord(form: NgForm){
    this.service.postViaje().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshlist();
        this.toastr.success('Envio exitoso', 'Registro de viajes Enviados S.A.S.')
      },
      err => {console.log(err); }
    );
  }

  updateRecord(form:NgForm){
    this.service.putViaje().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshlist();
        this.toastr.info('Actualizacion exitosa', 'Registro de viajes Enviados S.A.S.')
      },
      err => {console.log(err); }
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Viajes();
  }

}
