import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RecherceComponent } from './recherce/recherce.component';
import { ProfilComponent } from './profil/profil.component';
import { MessageComponent } from './message/message.component';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { ConConComponent } from './con-con/con-con.component';
import { ConInscComponent } from './con-insc/con-insc.component';

const appRoutes: Routes = [
{ path: 'recherche', component: RecherceComponent },
{ path: 'connect', component: ConnexionComponent },
{ path: 'connect/connexion', component: ConConComponent },
{ path: 'connect/inscription', component: ConInscComponent },
{ path: 'profil', component: ProfilComponent },
{ path: 'message', component: MessageComponent },
{ path: '', component: AccueilComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    RecherceComponent,
    ProfilComponent,
    MessageComponent,
    ConnexionComponent,
    ConConComponent,
    ConInscComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
