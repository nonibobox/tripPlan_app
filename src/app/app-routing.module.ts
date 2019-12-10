import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/hotel',
    pathMatch: 'full'
  },
  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'hotels',
    loadChildren: () => import('./pages/hotels/hotels.module').then( m => m.HotelsPageModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./pages/restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  },
  {
    path: 'recreations',
    loadChildren: () => import('./pages/recreations/recreations.module').then( m => m.RecreationsPageModule)
  },
  {
    path: 'planner',
    loadChildren: () => import('./pages/planner/planner.module').then( m => m.PlannerPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
