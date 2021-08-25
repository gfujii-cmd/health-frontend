import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  public barChartLabels: Label[] = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [18, 10, 23, 5, 10, 6, 12], label: 'Lavagens/Dia' }
  ];

  public height = 400

  goToPage(page: string): void {
    this.router.navigate([`${page}`])
  }

}
