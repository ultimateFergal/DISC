import { Component, OnInit } from '@angular/core';

import { TestService } from '../../services/test.service';


@Component({
  selector: 'app-test-questions',
  templateUrl: './test-questions.component.html',
  styleUrls: ['./test-questions.component.css']
})
export class TestQuestionsComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.testService.fetchQuestions();
    console.log('hi');
  }

}
