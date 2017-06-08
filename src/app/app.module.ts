import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {HomePage} from '../pages/home/home';
import {Login} from "../pages/login/login";
import {IonicStorageModule} from "@ionic/storage";
import {Contacts} from "../pages/contacts/contacts";
import {TabsMenu} from "../pages/tabs-menu/tabs-menu";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    TabsMenu,
    Contacts
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    TabsMenu,
    Contacts
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
