import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { HandWashResponse } from 'src/app/core/model/response/hand-wash-response.model';
import { User } from 'src/app/core/model/user.model';
import { TokenStorageService } from 'src/app/core/services/auth/token-storage.service';
import { GameficationService } from 'src/app/core/services/gamefication/gamefication.service';
import { HandWashService } from 'src/app/core/services/hand-wash/hand-wash.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

  userName!: string;

  userEmail!: string;

  handWashData!: HandWashResponse;

  data: number[] = [];

  topList!: User[];

  constructor(
    private router: Router,
    private token: TokenStorageService,
    private handWashService: HandWashService,
    private gameService: GameficationService
    ) { }

  ngOnInit(): void {
    this.userName = this.token.getUser();
    this.userEmail = this.token.getEmail();
    this.getWashData();
    this.getTopList();
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  public barChartLabels: Label[] = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: this.data, label: 'Lavagens/Dia' }
  ];

  public height = 400

  goToPage(page: string): void {
    this.router.navigate([`${page}`])
  }

  getWashData(){
    this.handWashService.getWashData(this.userEmail).subscribe(data => {
      if (data.response && 200 === data.httpCode) {
        this.handWashData = data.response;
        this.pushValuesToDataArray();
      }
    }, err => {
      console.log(err.error);
    })
  }

  pushValuesToDataArray(){
    const data = Object.values(this.handWashData);
    for(var value in data){
      this.data.push(data[value]);
    }
  }

  getTopList() {
    this.gameService.getTopList().subscribe(data => {
      this.topList = data.response;
    });
  }
}
