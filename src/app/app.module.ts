import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PfEvoComponent } from './components/pf-evo/pf-evo.component';
import { ClientComponent } from './components/pf-evo/client/client.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ApplicationComponent} from './components/pf-evo/application/application.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    PfEvoComponent,
    ClientComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
