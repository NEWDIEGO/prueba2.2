import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {
  datos = {
   
  };
  lista = [];

  
  
  constructor(public Servicio: UsuariosService, public ruta: ActivatedRoute, private storage: StorageService) { }

  async ngOnInit() {
    await this.cargarPersona()
    
  }


  async cargarPersona(){
    this.ruta.paramMap.subscribe( us =>{
      this.datos = this.storage.getDato('alumnos',us.get('usuarioID')).then(res =>
        this.lista.push(res))
    })
  }
  

  

  async eliminar(rut){
    await this.storage.eliminar('alumnos',rut);
    this.cargarPersona()
  }

  async modificar(){
    await this.storage.modificar('alumnos',this.datos)
    await this.cargarPersona()
  }
}
