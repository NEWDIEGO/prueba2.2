import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service'
import { ValidadorService } from 'src/app/services/validador.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  

  alumnoForm = new FormGroup({
    rut: new FormControl('',[Validators.required, Validators.pattern('[0-9]{1,2}.[0-9]{3}.[0-9]{3}-[0-9kK]{1}')]),
    nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
    apellidos: new FormControl('',[Validators.required, Validators.minLength(3)]),
    correo: new FormControl('',[Validators.required, Validators.minLength(10), Validators.pattern('^[a-z0-9._%+-]+@duocuc.cl')]),
    telefono: new FormControl('',[Validators.required, Validators.pattern('56+[0-9]{9}')]),
    fecha_nac: new FormControl('',[Validators.required]),
    semestre: new FormControl('',[Validators.required, Validators.min(1), Validators.max(8)]),
    password: new FormControl('',[Validators.required, Validators.minLength(8),Validators.maxLength(21)]),
    usuario :new FormControl('alumno')
  })

  verificarPass: string

  alumno : any = {
    rut: '',
    nombre: '',
    apellidos: '',
    correo: '',
    telefono: '',
    fecha_nac: '',
    semestre: '',
    password: '',
    usuario: 'alumno'
  }
  alumnos: any[] = [];

  KEY_personas = 'usuarios';

  constructor(private usuariosService: UsuariosService, private router: Router, private validador: ValidadorService,
    private storage :StorageService) {

   }

  ngOnInit() {
    console.log(this.storage.getDatos(this.KEY_personas))
  }

  async guardar(){
    if(!this.validador.rutValidator(this.alumnoForm.controls.rut.value)){
      alert('rut incorrecto');
      return;
    }
    if(!this.validador.validarEdadMinima(17,this.alumnoForm.controls.fecha_nac.value)){
      alert('edad no valida');
      return;
    }
    if(this.alumnoForm.controls.password.value != this.verificarPass){
      alert('Las contrasenas no coinciden')
      return;
    }
    var respuesta: boolean  = await this.storage.agregar(this.KEY_personas,this.alumno)
    if(respuesta){
      alert('Usuario registrado!');
      await this.alumnoForm.reset();
      this.verificarPass = '';
      await this.router.navigate(['/login']);
    }else{
      alert('Usuario ya existe')
    }
    
  }
  limpiar(){
    this.alumnoForm.reset();
    this.verificarPass = '';
  }
}