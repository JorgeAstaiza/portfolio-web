import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormEmailService } from './services/form-email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formulario!: FormGroup;
  patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  patternName = /a-zA-Z ]/;
  public alertaNombre = 'oculto';
  public alertaEmail = 'oculto';
  public alertaMensaje = 'oculto';
  public mensajeEnviado = 'oculto';
  public errorServidor = 'oculto';

  constructor(
    private fb: FormBuilder,
    private formEmailService: FormEmailService
    ) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formulario = this.fb.group({
      name: [null, [Validators.required, Validators.min(3)]],
      email: [null, [Validators.required, Validators.pattern(this.patternEmail)]],
      message: [null, [Validators.required]]
    })
  }

  validarForm() {   
    if (this.formulario.get('name')?.invalid && this.formulario.get('name')?.touched) {
      this.alertaNombre = 'invalid-feedback-name';
    } else {
      this.alertaNombre = 'oculto';
    }
    if (this.formulario.get('email')?.invalid && this.formulario.get('email')?.touched) {
      this.alertaEmail = 'invalid-feedback-email';
    } else {
      this.alertaEmail = 'oculto';
    }
    if (this.formulario.get('message')?.invalid && this.formulario.get('message')?.touched) {
      this.alertaMensaje = 'invalid-feedback-mesagge';
    } else {
      this.alertaMensaje = 'oculto';
    }
  }

  public sendEmail() {
    if (this.formulario.valid) {
      this.formEmailService.sendEmailByForm(this.formulario.value).subscribe(res => {
        if (res.ok) {
          this.mostrarMensaje(true);
          this.formulario.reset();
        } else {
          this.mostrarMensaje(false);
        }
      })
    } else {
      this.validarForm();
    }
  }
  private mostrarMensaje(res: boolean) {
    if(res) {
      this.mensajeEnviado = 'mostrar-mensaje';
    } else {
      this.errorServidor = 'error-servidor';
    }
    setTimeout(() => {
      this.mensajeEnviado = 'oculto'
    }, 5000);
  }
}
