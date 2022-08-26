import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'accueil',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: { animation: 'Accueil' }
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accueil'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
