import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Chart } from 'chart.js';
import * as $ from 'jquery';
import { UtilsService } from 'src/utils/utils.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']

})
export class SkillsComponent implements OnInit {
  constructor(private spinnerService: Ng4LoadingSpinnerService, private _UtilsService: UtilsService) { }

  private softWareChart: any;
  private ctxSoftWareChart: any;
  private englishChart: any;
  private ctxEnglishChart: any;



  ngOnInit() {
    this.generateCharts();
  }
  generateCharts() {
    this.softWareChart = document.getElementById('softWareChart');
    this.englishChart = document.getElementById('englishChart');

    if (!isNullOrUndefined(this.softWareChart)) {
      this.ctxSoftWareChart = this.softWareChart.getContext('2d');
      const softWareChart = new Chart(this.ctxSoftWareChart, {
        type: 'bar',
        data: {
          labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
          datasets: [
            {
              label: '% Knowledge',
              backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
              data: [2478, 5267, 734, 784, 433]
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Software Skills',
            padding: 20,
            fontSize: '32',
            fontColor: 'black',
            fontFamily: 'Serif'
          },
          maintainAspectRatio: false

        }
      });
    }
    if (!isNullOrUndefined(this.englishChart)) {
      this.ctxEnglishChart = this.englishChart.getContext('2d');
      const englishChart = new Chart(this.ctxEnglishChart, {
        type: 'doughnut',
        data: {
          datasets: [
            {
              label: 'English',
              backgroundColor: ['#4169E1', '#87CEFA'],
              data: [70, 30]
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          tooltips: { enabled: false },
          title: {
            display: true,
            text: 'English',
            fontSize: '32',
            fontColor: 'black',
            padding: 20,
            fontFamily: 'Serif'

          },
          maintainAspectRatio: false

        },
        plugins: [{
          id: 'englishChart',
          afterDraw: function (chart, option) {
            chart.ctx.fillStyle = 'black';
            chart.ctx.textBaseline = 'middle';
            chart.ctx.textAlign = 'center';
            chart.ctx.font = '35px Arial';
            chart.ctx.fillText('70%', ((chart.chartArea.left + chart.chartArea.right) / 2),
              ((chart.chartArea.top + chart.chartArea.bottom) / 2));
          }
        }]
      });

    }

  }
  resetCharts() {
    $('canvas').remove();
    $('.item1').prepend('<canvas id="softWareChart" ></canvas>');
    $('.item2').prepend('<canvas id="englishChart" ></canvas>');
    setTimeout(() => {
      this.generateCharts();
    }, 500);

  }


}
