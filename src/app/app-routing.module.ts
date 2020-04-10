import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  {
    path:
      'elements', loadChildren: () =>
      import('./elements/elements.module').then(m => m.ElementsModule)
  },
  {
    path:
      'collections', loadChildren: () =>
      import('./collections/collections.module').then(m => m.CollectionsModule)
  },
  // {
  //   path:
  //     'mods', loadChildren: () =>
  //     import('./mods/mods.module').then(m => m.ModsModule)
  // },
  {
    path: '', component: HomeComponent
  //  empty '' refers to a main page local host
  },
  {
    path: '**', component: NotFoundComponent
  //  '**' means if we do not find another rout to display to the user,
  //   then just show this component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
