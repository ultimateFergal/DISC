import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

    private questions: any[]
    private fbSubs: Subscription[] = [];

  constructor(private db: AngularFirestore) { }

  fetchQuestions() {
      console.log('fuck');
    this.fbSubs.push(this.db
    .collection('questionsBank')
    .snapshotChanges()
    .pipe(
        map(docArray => {
            console.log('docArray');
            console.log(docArray);
            return docArray.map(doc => {
                console.log('doc');
                console.log(doc);
                console.log('doc.payload');
                console.log(doc.payload);
                console.log('doc.payload.doc');
                console.log(doc.payload.doc);
                console.log(doc.payload.doc.id);
                console.log(doc.payload.doc.data());
                console.log(doc.payload.doc.data().options);
                return {
                    id: doc.payload.doc.id,
                    // ...doc.payload.doc.data()
                    // name: doc.payload.doc.data().name,
                    // duration: doc.payload.doc.data().duration,
                    // calories: doc.payload.doc.data().calories
                };
            });
        })
    )
    .subscribe((exercises: any[]) => {
        this.questions = exercises;
        console.log('this.questions');
        console.log(this.questions);
    //    this.exercisesChanged.next([...this.availableExercises]);
    }/* , error => {
       // console.log(error);
    } */));
  }
}
