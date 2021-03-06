import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from '../components/homepage/homepage.component';
import {PfEvoComponent} from '../components/pf-evo/pf-evo.component';
import {ClientComponent} from '../components/pf-evo/client/client.component';
import {ApplicationComponent} from '../components/pf-evo/application/application.component';


const routes : Routes = [
  { path: '', redirectTo: 'iJ2C', pathMatch: 'full'},
  { path: 'iJ2C', component: HomepageComponent },
  { path: 'iJ2C/pf-evo', component: PfEvoComponent},
  { path: 'iJ2C/pf-evo/client', component: ClientComponent},
  { path: 'iJ2C/pf-evo/client/application', component: ApplicationComponent}
  /*
  { path: 'iJ2C/pf-evo/client', children:[
      {path: '**', component: ClientComponent}
    ]}
  */
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
