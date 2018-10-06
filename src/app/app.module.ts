import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin-module/admin.module';
import { DiscFeModule } from './disc-fe/disc-fe/disc-fe.module';

import { TestQuestionsComponent } from './disc-fe/components/test-questions/test-questions.component';


@NgModule({
  declarations: [
    AppComponent,
    TestQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AdminModule, 
    DiscFeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
