import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

import {MatStepperModule} from '@angular/material/stepper';

import { TestService } from '../../services/test.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-test-questions',
  templateUrl: './test-questions.component.html',
  styleUrls: ['./test-questions.component.css']
})
export class TestQuestionsComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  questions: any;// []; // Exercise[];
  private questionsSubscription: Subscription;
  
  constructor(private testService: TestService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.questionsSubscription = this.testService.questionsSubscription.subscribe( (questions: any) => {
      this.questions = questions;
      console.log('questions');
      console.log(this.questions);
    });
    this.questions = this.testService.fetchQuestions();

        this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
