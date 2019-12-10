import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { HotelsPageModule } from '../hotels/hotels.module';
import { RecreationsPageModule } from '../recreations/recreations.module';
import { PlannerPageModule } from '../planner/planner.module';
import { RestaurantsPageModule } from '../restaurants/restaurants.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RestaurantsPageModule,
    HotelsPageModule,
    RecreationsPageModule,
    PlannerPageModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
