import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  loading: any;
  constructor( private loadingCtrl: LoadingController) {
  
  }

  ngOnInit() {

    this.presentLoading('Calmao compare');
    setTimeout(() => {
      this.loading.dismiss();
    },1500);

  }
  async presentLoading( message : string) {
    this.loading = await this.loadingCtrl.create({
      message
      //duration: 1500
    });
    return this.loading.present();
  }

}
