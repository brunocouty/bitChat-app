import {Component} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Contacts} from "../contacts/contacts";
import {Storage} from "@ionic/storage";
import {Login} from "../login/login";

/**
 * Generated class for the TabsMenu page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs-menu',
  templateUrl: 'tabs-menu.html',
})
export class TabsMenu {

  contacts = Contacts;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage,
              private app: App) {
  }

  ionViewDidLoad() {

  }

}
