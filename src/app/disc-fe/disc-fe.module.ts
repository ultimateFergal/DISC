import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../../environments/environment';

import { DiscFeRoutingModule } from './disc-fe-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DiscFeRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  declarations: []
})
export class DiscFeModule { }
