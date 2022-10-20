import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-registro-asistencia',
  templateUrl: './registro-asistencia.page.html',
  styleUrls: ['./registro-asistencia.page.scss'],
})
export class RegistroAsistenciaPage implements OnInit {
  clase : any ={
    nombre:'',
    sigla:'',
    rutProfe:''
  }

  clases : any[]=[]


  KEY_asistencia = 'clase'
  
  constructor(private storage: StorageService) { }

  ngOnInit() {
    console.log(this.clases)
  }


  async guardarClase(){
    var respuesta: boolean = await this.storage.agregarClase(this.KEY_asistencia,this.clase)
    if(respuesta){
      alert('clase Registrada!')
    }
  }

  async getDatos(){
    
  }
}
