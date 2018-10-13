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
    questionsSubscription = new Subject<any[]>();

  constructor(private db: AngularFirestore) { }

  fetchQuestions() {
    this.fbSubs.push(this.db
    // .collection('questionsBank')).get()
    // .collection('questionsBank').doc('1').collection('options')
    .collection('questionsBank')
    .snapshotChanges()
    .pipe(
        map(docArray => {
            return docArray.map(doc => {
                return {
                    ...doc.payload.doc.data(),
                    id: doc.payload.doc.id,
                };
            });
        })
    )
    .subscribe((questions: any[]) => {
        this.questions = questions;
        this.questionsSubscription.next([ questions ]);
    }, error => {
       // console.log(error);
    } ));
  }
}
