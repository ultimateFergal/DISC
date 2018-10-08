import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin-module/admin.module';
import { DiscFeModule } from './disc-fe/disc-fe.module';

import { TestQuestionsComponent } from './disc-fe/components/test-questions/test-questions.component';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { InicioComponent } from './components/inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    TestQuestionsComponent,
    InicioComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: 'inicio', component: InicioComponent },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
    ]),
    AdminModule,
    DiscFeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
