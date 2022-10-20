import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-alumno-page',
  templateUrl: './alumno-page.page.html',
  styleUrls: ['./alumno-page.page.scss'],
})
export class AlumnoPagePage implements OnInit {
  KEY_sesion = 'sesion';

  usuario: any;
  constructor(private usuariosService: UsuariosService, private router : Router, private ActivatedRoute : ActivatedRoute,private storageService : StorageService) { }
  ngOnInit() {
    this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
  }
  logout(rut){
    this.storageService.cerrarSesion(this.KEY_sesion,rut)
  }
}
