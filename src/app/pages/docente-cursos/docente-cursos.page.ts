import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-docente-cursos',
  templateUrl: './docente-cursos.page.html',
  styleUrls: ['./docente-cursos.page.scss'],
})
export class DocenteCursosPage implements OnInit {

  KEY_asistencia = 'clase'
  clases :  [] = [];
  usuario = [] ;
  KEY_sesion = 'sesion';


  constructor(private storage : StorageService) { }

  async ngOnInit() {
    await this.storage.getDatos(this.KEY_sesion) 
  }
  async cargarUsuario(){
    this.usuario = await this.storage.getDatos(this.KEY_sesion) 
  }

  
  async mostrarClases(rut){
    this.clases = await this.storage.getDato(this.KEY_asistencia,rut);
  }
}