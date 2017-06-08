import {Component} from '@angular/core';
import {AlertController, App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {TabsMenu} from "../tabs-menu/tabs-menu";

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare let $;
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  user = {
    phone: '',
    name: ''
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              private alertCtrl: AlertController,
              private app: App) {
  }

  ionViewDidLoad() {
    $('.phone input').mask('+55 (00) 0 0000-0000');
    this.storage.ready().then(() => {
      this.storage.get('user_phone').then((user_phone) => {
        if(user_phone != null) {
          let app = this.app.getRootNav();
          app.push(TabsMenu);
        }
      });
    })
  }

  access() {
    if (this.user.name == '') {
      let alert = this.alertCtrl.create({
        title: 'Atenção',
        message: 'Informe seu nome, como você deseja que as pessoas vejam.',
        buttons: ['Ok, entendi!']
      });
      alert.present();
      return false;
    }
    if (this.user.phone == '') {
      let alert = this.alertCtrl.create({
        title: 'Atenção',
        message: 'É necessário informar seu número de telefone.',
        buttons: ['Ok, entendi!']
      });
      alert.present();
      return false;
    }
    this.storage.ready().then(() => {
      this.storage.set('user_phone', this.user.phone);
      this.storage.set('user_name', this.user.name);
    }).then(() => {
      let app = this.app.getRootNav();
      app.push(TabsMenu);
    });
  }

}
