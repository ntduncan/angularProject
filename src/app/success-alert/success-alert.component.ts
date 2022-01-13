import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<h1 class="success">THIS WAS A SUCCESS</h1>`,
  styleUrls: ['./success-alert.component.css'],
  styles: ['.success {color: green;}']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
