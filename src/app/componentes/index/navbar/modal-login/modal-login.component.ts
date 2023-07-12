import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit{
  form: FormGroup;

  //Inyecta en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder) {
    //Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit() {}

  //Metodos para el formulario
  //Toma el dato del password
  get Password() {
    return this.form.get("password");
  }

  //Toma el dato del mail
  get Mail() {
    return this.form.get("email");
  }

  //Metodo de validacion del password
  get PasswordInvalid() {
    return this.Password?.touched && !this.Password?.valid;
  }

  get PasswordValid() {
    return this.Password?.valid;
  }

  //Metodo de validacion del mail
  get MailInvalid() {
    return this.Mail?.touched && !this.Mail?.valid;
  }

  get MailValid() {
    return this.Mail?.valid;
  }

  onEnviar(event: Event) {
    //Detenemos la propagacion o ejecucion del compotarmiento submit de un form
    event.preventDefault;

    if(this.form.valid){
      //Llamamos a nuestro servicio para enviar los datos al servidor
      //Tambien podriamos ejecutar alguna logica extra
      alert("Todo salio bien !Enviar formulario!")
    } else {
      //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    }
  }
}
