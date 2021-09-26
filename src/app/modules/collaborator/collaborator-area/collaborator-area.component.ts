import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/core/services/auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collaborator-area',
  templateUrl: './collaborator-area.component.html',
  styleUrls: ['./collaborator-area.component.scss']
})
export class CollaboratorAreaComponent implements OnInit {

  userName!: string;

  constructor(
    private token: TokenStorageService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.userName = this.token.getUser();
  }
  goToPage(page: string): void {
    this.router.navigate([`${page}`])

  }

}
