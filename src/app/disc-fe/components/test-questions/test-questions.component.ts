import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

import { MatStepperModule } from '@angular/material/stepper';

import { TestService } from '../../services/test.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-test-questions',
  templateUrl: './test-questions.component.html',
  styleUrls: ['./test-questions.component.css']
})
export class TestQuestionsComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  questionsForm: FormGroup;
// Property defined as a function that will return a Formarray
   get steps(): FormArray{
    return<FormArray>this.questionsForm.get('steps'); // Must be <FormArrary> so it's not abastract control
  } 
  // get steps(): AbstractControl | null { return this.questionsForm.get('steps'); }

  questions: any;// []; // Exercise[];
  private questionsSubscription: Subscription;

  constructor(private testService: TestService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.questionsSubscription = this.testService.questionsSubscription.subscribe((questions: any) => {
      this.questions = questions;
      console.log('questions');
      console.log(this.questions);
      this.questions.map(elementSet => {  
        elementSet.map(objItem => {
          objItem = Object.keys(objItem).map(e => ({qn: e, qs: objItem[e]}))
          this.steps.push(this.buildStepper(objItem))
        });
      });      
    });
    this.questions = this.testService.fetchQuestions();


    this.questionsForm = this._formBuilder.group({
      steps: this._formBuilder.array([
         // this.buildStepper('Prueba2'), 
/*         this._formBuilder.group({
          firstCtrl: ['', Validators.required],
        }),
        this._formBuilder.group({
          firstCtrl: ['asfsf', Validators.email]
        }) */
      ]) // Must be using form array
    });
    //this.steps.push(this.buildStepper());
  }

  // Creates a dynamic form in the formarray
  addStepp(): void {
    this.steps.push(this.buildStepper('Prueba1'));
  }

  // Function that creates formgroup dynamically
  buildStepper(objItem: any): FormGroup {
    console.log("objItemFdo");
    console.log(objItem);
    return this._formBuilder.group({
      o1: objItem[0].qs,
      o2: objItem[1].qs,
      o3: objItem[2].qs,
      o4: objItem[3].qs,
      // chbM: '',
      // chbMe: '',
    })
  }

  convertObjToArray(objj: any) {
    var elemobj = Object.keys(objj).map(function(key) {
      return [Number(key), objj[key]];
    });

    return elemobj;
  }
}
