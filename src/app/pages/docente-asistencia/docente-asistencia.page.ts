import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-docente-asistencia',
  templateUrl: './docente-asistencia.page.html',
  styleUrls: ['./docente-asistencia.page.scss'],
})
export class DocenteAsistenciaPage implements OnInit {

  constructor(private navsParams: NavParams) { }

  ngOnInit() {
    console.log("usuario id" + this.navsParams.get('id') );
  }

}
