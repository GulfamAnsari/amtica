import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  public allTests = [];
  public test;
  public questions = [];

  constructor(private router: Router) {
  }

  public logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  public addTest() {
    this.test = {
      question: '',
      name: '',
      singleCorrect: true,
      options: [],
      answers: []
    };
  }

  public multiple(value) {
    this.test.answers = [];
    if (value === 'yes') {
      this.test.singleCorrect = false;
    } else {
      this.test.singleCorrect = true;
    }
  }

  public addOptions() {
    this.test['options'][this.test['options'].length] = {
      number: this.test['options'].length,
      text: ''
    };
  }

  public answers(event, index) {
    if (this.test.singleCorrect) {
      this.test.answers[0] = index;
    } else {
      const ele = document.getElementById('checkbox' + index);
      if (ele['checked']) {
        this.test.answers.push(index);
      } else {
        this.test.answers.splice(this.test.answers.indexOf(index), 1);
      }

    }
  }

  public submit() {
    this.questions.push(this.test);
    this.addTest();
    console.log(this.test);
  }

  public submitTest() {
    this.allTests.push(this.questions);
    this.questions = [];
    this.addTest();
  }
}
