import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      
      {
        path: 'hotels',
        children: [
          {
            path: '',
            loadChildren: () => import('../hotels/hotels.module').then(m => m.HotelsPageModule)
          }
        ]
      },
      {
        path: 'restaurants',
        children: [
          {
            path: '',
            loadChildren: () => import('../restaurants/restaurants.module').then(m => m.RestaurantsPageModule)
          }
        ]
      },
      {
        path: 'recreations',
        children: [
          {
            path: '',
            loadChildren: () => import('../recreations/recreations.module').then(m => m.RecreationsPageModule)
          }
        ]
      },
      {
        path: 'planner',
        children: [
          {
            path: '',
            loadChildren: () => import('../planner/planner.module').then(m => m.PlannerPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

