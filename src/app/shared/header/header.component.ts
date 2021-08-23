import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToPage(page: string): void {
    page === 'fiap' ?
    window.location.href = 'https://www.fiap.com.br/'
    : window.location.href = 'https://www.hospitaloswaldocruz.org.br/';
  }

}
