import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsMenu } from './tabs-menu';

@NgModule({
  declarations: [
    TabsMenu,
  ],
  imports: [
    IonicPageModule.forChild(TabsMenu),
  ],
  exports: [
    TabsMenu
  ]
})
export class TabsMenuModule {}
