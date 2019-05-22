import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  public allTests = [];
  public test;
  public questions = [];
  public showPapers = false;
  public url = '';
  public loader = {
    status: false,
    message: ''
  };

  constructor(private router: Router, private http: HttpClient) {
    if (window.location.hostname === 'localhost') {
      this.url = 'http://localhost:4100/test-paper';
    } else {
      this.url = '/test-paper';
    }
  }

  public logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  public reset() {
    this.test = {
      question: '',
      name: '',
      singleCorrect: true,
      options: [],
      answers: []
    };
  }

  public addTest() {
    this.questions = [];
    this.showPapers = false;
    this.reset();
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
    this.reset();
  }

  public submitTest() {
    this.allTests.push(this.questions);
    this.loader.status = true;
    this.loader.message = 'Saving... Please wait.';
    this.http.post(this.url, this.allTests, { headers: { 'Content-Type': 'application/json' } })
      .subscribe((data) => {
        this.questions = [];
        this.reset();
        this.loader.status = true;
        this.loader.message = 'You have succesfully added your paper';
        console.log(this.allTests);
      }, (err) => {
        this.loader.status = true;
        this.loader.message = 'Error while adding your paper';
      });
  }

  public showAllPapers() {
    this.showPapers = true;
  }

  public selectedPaper(i) {
    this.questions = this.allTests[i];
  }
}
