import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.page.html',
  styleUrls: ['./lista-alumnos.page.scss'],
})
export class ListaAlumnosPage implements OnInit {

  alumnos = []  
  

  constructor(public Servicio: UsuariosService, private storage: StorageService) { }

  async ngOnInit() {
    
    await this.cargarPersonas()
  }
  async cargarPersonas(){
    this.alumnos = await this.storage.getDatos('alumnos') 
  }
  

}
