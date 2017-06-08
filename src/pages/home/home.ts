import {Component, NgZone} from '@angular/core';
import {NavController} from 'ionic-angular';

declare let io;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {
    message: '',
    name: ''
  };
  socket: any;
  zone: any;
  chats = [];
  destination: string = '';
  pkg = {
    data: {},
    destination: 'abc'
  };

  static get parameters() {
    return [NgZone];
  }

  constructor(ngzone) {
    this.zone = ngzone;
    this.socket = io('http://localhost:3000');
    this.socket.on(this.pkg.destination + 'message', (msg) => {
      this.zone.run(() => {
        console.log(msg);
        this.chats.push(msg);
      });
    });
    // Entrou
    this.socket.on(this.pkg.destination + 'userentered', (user) => {
      this.zone.run(() => {
        this.chats.push(user + ' entrou!');
      });
    });
    // Saiu
    this.socket.on(this.pkg.destination + 'userleave', (user) => {
      this.zone.run(() => {
        this.chats.push(user + ' saiu!');
      });
    });
  }

  sendMessage() {
    if (this.user.message != '') {
      this.pkg.data = this.user;
      console.log('send', this.pkg);
      this.socket.emit('message', this.pkg);
    }
    // this.user.message = '';
  }

  ionViewWillLeave() {
    this.socket.emit('userleave', this.pkg);
  }

  ionViewDidLeave() {
    this.socket.emit('userentered', this.pkg);
  }

}
