import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/model/user.model';
import { TokenStorageService } from 'src/app/core/services/auth/token-storage.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  badgeLevel!: number;
  userScore!: number;
  canUpgrade!: boolean;
  canShow = false;
  
  constructor(
    private userService: UserService,
    private tokenService: TokenStorageService
    ) { }

  ngOnInit(): void {
    this.getUserLevel();
  }

  getUserLevel(): void {
    this.userService.getUser(this.tokenService.getEmail()).subscribe(data => {
      if(data && 200 === data.httpCode){
        this.canShow = true;
        this.badgeLevel = data.response.level;
        this.userScore = data.response.score;
        this.canUpgrade = this.chackIfCanUpgrade();
        console.log(this.canUpgrade);
        console.log(this.badgeLevel);
        console.log(this.userScore);
      }
    }, err => {
      console.log(err.error);
    })
  }

  chackIfCanUpgrade(): boolean {
    switch(this.badgeLevel){
      case 1:
        return this.userScore >= 1000 ? true : false;
      case 2:
        return this.userScore >= 2000 ? true : false;
      case 3:
        return this.userScore >= 3000 ? true : false;
    }
    return false;
  }

}
