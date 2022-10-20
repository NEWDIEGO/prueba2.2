import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-docente-page',
  templateUrl: './docente-page.page.html',
  styleUrls: ['./docente-page.page.scss'],
})
export class DocentePagePage implements OnInit {
  KEY_sesion = 'sesion';

  constructor(private usuariosService : UsuariosService, private router : Router, private ActivatedRoute : ActivatedRoute,private storageService : StorageService) { }

  usuario : any [];

  ngOnInit() {
    this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
  }
  logout(rut){
    this.storageService.cerrarSesion(this.KEY_sesion,rut)
  }

}
