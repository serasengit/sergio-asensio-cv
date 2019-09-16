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
    this.generateSoftwareSkillsChart();
    this.generateEnglishChart();
  }
  generateSoftwareSkillsChart() {
    this.softWareChart = document.getElementById('softWareChart');
    if (!isNullOrUndefined(this.softWareChart)) {
      this.ctxSoftWareChart = this.softWareChart.getContext('2d');
      const softWareChart = new Chart(this.ctxSoftWareChart, {
        type: 'bar',
        data: {
          labels: ['Java', 'Angular 7', 'NodeJS', 'Salesforce', 'Web Design', 'Web Services', 'BBDD', 'ETL', 'Version Control'],
          datasets: [
            {
              data: [80, 75, 65, 70, 65, 70, 60, 30, 65],
              backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(255, 159, 64, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(179, 60, 0,0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(102, 102, 153,0.4)',
                'rgba(128, 128, 128,0.4)'],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255, 159, 64, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(102, 34, 0,1)',
                'rgba(153, 102, 255, 1)',
                'rgba(51, 51, 77,1)',
                'rgba(64, 64, 64,1)'
              ],
              borderWidth: 2
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Software Developer',
            padding: 20,
            fontSize: '32',
            fontColor: 'black',
            fontFamily: 'Poppins, sans-serif'
          },
          scales: {
            xAxes: [{
              ticks: {
                autoSkip: false,
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }],
            yAxes: [{
              ticks: {
                autoSkip: false,
                beginAtZero: true,
                max: 100
              },
              gridLines: {
                display: true
              }
            }]
          },
          tooltips: {
            enabled: true,
            mode: 'single',
            callbacks: {
              label: function (tooltipItem, data) {
                let tooltip = [];
                if (tooltipItem.xLabel === 'Java') {
                  tooltip = [' Spring MVC', ' Hibernate', ' Maven', ' JSF', ' JPA', ' Javascript', ' AJAX', ' Quarz', ' Apache', ' Tomcat'];
                } else if (tooltipItem.xLabel === 'Salesforce') {
                  tooltip = [' Apex', ' Visualforce', ' Heroku', ' Marketing Cloud', ' Schedule Jobs'];
                } else if (tooltipItem.xLabel === 'Angular 7') {
                  tooltip = [' Typescript', ' Npm', ' Reactive Forms', ' NgModules', ' Observables & Promises'];
                } else if (tooltipItem.xLabel === 'NodeJS') {
                  tooltip = [' Express.js', ' Nodemon', ' Babel-Node', ' Knex.js', ' Objection.js'];
                } else if (tooltipItem.xLabel === 'Web Design') {
                  tooltip = [' HTML', ' HTML5', ' JSP', ' JSPX', ' CSS', ' SCSS', ' Bootstrap 4', ' Font-Awesome 4', ' ChartJS'];
                } else if (tooltipItem.xLabel === 'Web Services') {
                  tooltip = [' REST', ' SOAP'];
                } else if (tooltipItem.xLabel === 'BBDD') {
                  tooltip = [' PostgresSQL', ' Oracle', ' SQL'];
                } else if (tooltipItem.xLabel === 'ETL') {
                  tooltip = [' Talend'];
                } else if (tooltipItem.xLabel === 'Version Control') {
                  tooltip = [' Git', ' Github', ' Bitbucket', ' SVN', ' CVS'];
                }
                return tooltip;
              }
            }
          },
          maintainAspectRatio: false
        }
      });
    }
  }
  generateEnglishChart() {
    this.englishChart = document.getElementById('englishChart');
    if (!isNullOrUndefined(this.englishChart)) {
      this.ctxEnglishChart = this.englishChart.getContext('2d');
      const englishChart = new Chart(this.ctxEnglishChart, {
        type: 'doughnut',
        data: {
          datasets: [{
            backgroundColor: [
              '#4169E1',
              '#87CEFA',
              '#FFFAFA',
              '#e6e6e6',
              '#DC3912',
              '#ff9999'
            ],
            hoverBackgroundColor: [
              '#4169E1',
              '#87CEFA',
              '#FFFAFA',
              '#e6e6e6',
              '#DC3912',
              '#ff9999'
            ],
            data: [
              65.0,
              35.0,
              0.0,
              0.0,
              0.0,
            ]
          },
          {
            backgroundColor: [
              '#4169E1',
              '#87CEFA',
              '#FFFAFA',
              '#e6e6e6',
              '#DC3912',
              '#ff9999'
            ],
            hoverBackgroundColor: [
              '#4169E1',
              '#87CEFA',
              '#FFFAFA',
              '#e6e6e6',
              '#DC3912',
              '#ff9999'
            ],
            data: [
              0.0,
              0.0,
              70.0,
              30.0,
              0.0,
              0.0
            ]
          },
          {
            backgroundColor: [
              '#4169E1',
              '#87CEFA',
              '#FFFAFA',
              '#e6e6e6',
              '#DC3912',
              '#ff9999'
            ],
            hoverBackgroundColor: [
              '#4169E1',
              '#87CEFA',
              '#FFFAFA',
              '#e6e6e6',
              '#DC3912',
              '#ff9999'
            ],
            data: [
              0.0,
              0.0,
              0.0,
              0.0,
              80.0,
              20.0
            ]
          }
          ],
          labels: [
            'Speaking',
            'Speaking_Off',
            'Listening',
            'Listenening_Off',
            'Writting',
            'Writting_Off',
          ]
        },
        options: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              filter: function (label) {
                if (label.text === 'Speaking' || label.text === 'Writting' || label.text === 'Listening') { return true; }
              },
              padding: 25
            }
          },
          tooltips: {
            filter: function (tooltipItem, data) {
              const label = data.labels[tooltipItem.index];
              if (label === 'Speaking' || label === 'Writting' || label === 'Listening') { return true; }
            }
          },
          title: {
            display: true,
            text: 'English',
            fontSize: '32',
            fontColor: 'black',
            padding: 20,
            fontFamily: 'Poppins, sans-serif'

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
