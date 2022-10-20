import { Component, OnInit } from '@angular/core';

import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-lista-docentes',
  templateUrl: './lista-docentes.page.html',
  styleUrls: ['./lista-docentes.page.scss'],
})
export class ListaDocentesPage implements OnInit {

  docentes = []
  upper(texto: string){
    return texto.toLocaleUpperCase()
  }
  constructor( public Servicio: UsuariosService) { }

  ngOnInit() {
    this.Servicio.getUsuarios().forEach( u => {
      if(u.usuario === 'docente'){
        this.docentes.push(u)
      }
    })
    
  }

  /*ionViewWillEnter() {
    
    this.docentes = this.Servicio.getDocentes()

  }*/

}
