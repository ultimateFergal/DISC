import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServicesService {

  constructor(private db: AngularFirestore) { }

  fetchQuestions() {
    this.db
    .collection('questionsBank')
    .snapshotChanges()
    .pipe(
        map(docArray => {
            return docArray.map(doc => {
                return {
                    id: doc.payload.doc.id,
                    // ...doc.payload.doc.data()
                    // name: doc.payload.doc.data().name,
                    // duration: doc.payload.doc.data().duration,
                    // calories: doc.payload.doc.data().calories
                };
            });
        })
    );
    // .subscribe((exercises: Exercise[]) => {
    //    this.availableExercises = exercises;
    //    this.exercisesChanged.next([...this.availableExercises]);
    // }/* , error => {
    //    // console.log(error);
    // } */));
  }
}
