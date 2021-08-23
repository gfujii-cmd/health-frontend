import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wide-button',
  templateUrl: './wide-button.component.html',
  styleUrls: ['./wide-button.component.scss']
})
export class WideButtonComponent implements OnInit {

  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
