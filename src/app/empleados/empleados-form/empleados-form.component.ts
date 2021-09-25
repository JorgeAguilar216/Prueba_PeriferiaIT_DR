import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Empleados } from 'src/app/shared/empleados.model';
import { EmpleadosService } from 'src/app/shared/empleados.service';

@Component({
  selector: 'app-empleados-form',
  templateUrl: './empleados-form.component.html',
  styles: [
  ]
})
export class EmpleadosFormComponent implements OnInit {

  constructor(public service:EmpleadosService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  
  onSubmit(form:NgForm){
    if(this.service.formData.empleadosID==0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.postEmpleados().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshlist();
        this.toastr.success('Envio exitoso', 'Registro de empleados Enviados S.A.S.')
      },
      err => {console.log(err); }
    );
  }

  updateRecord(form:NgForm){
    this.service.putEmpleados().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshlist();
        this.toastr.info('Actualizacion exitosa', 'Registro de empleados Enviados S.A.S.')
      },
      err => {console.log(err); }
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Empleados();
  }

}
