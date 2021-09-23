import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {

  qrdata : any;
  createCode : any;

  constructor() { }

  ngOnInit() {
  }

  public create(){
    this.createCode = this.qrdata;
  }

  public clear(){
    this.createCode = '';
  }

}