import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeeComponent } from './pee/pee.component';
import { PooComponent } from './poo/poo.component';


const routes: Routes = [
    { path: 'poo', component: PooComponent},
    { path: 'pee', component: PeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PooComponent, PeeComponent]
