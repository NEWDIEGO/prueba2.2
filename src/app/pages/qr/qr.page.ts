import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';


@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  
  code: any;
  elementType = 'canvas';
  value = '';

  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit(){}

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.code=barcodeData.text;
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }

  generarCodigo(){
    if (this.value == '') {
      this.value = v4();
    }
  }

}


