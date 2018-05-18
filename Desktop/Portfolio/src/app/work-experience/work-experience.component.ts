import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExprience: object = [
    {
      'label': 'Aviation Lovers',
      'title': 'Web Developer (Freelance)',
      'subtitle': 'March 2018 - May 2018',
      'content': [
        'Aviation lovers is an inhouse website to assist customer care agents, who takes care of the lost baggage claims ' +
        'for some of the big German airlines.',
        'It consists of 3 main modules:' +
        '<ol>' +
        '<li>Web-Training slide show about Data Security</li>' +
        '<li>Calculation module used to calculate the money to be paid to customers for the loss</li>' +
        '<li>Excel export module to export all the customer data along with money to be paid on a weekly basis</li>' +
        '</ol>',
        'Main responsibilities:' +
        '<ul>' +
        '<li>Design and develop the website as an Angular 5 single page application</li>' +
        '<li>Integrate currency API from Fixer.io for currency conversions</li>' +
        '<li>Integrate Zendesk Ticketing API to read and write data about customers and tickets</li>' +
        '</ul>'
      ],
      'chips': ['HTML5', 'CSS3', 'Bootstrap4', 'JavaScript', 'TypeScript', 'Angular 5', 'jQuery', 'ZenDesk API', 'Fixer.io API', 'Webpack']
    },
    {
      'label': 'Intel Deutschland GmbH, Munich',
      'title': 'Web Developer (Work Student)',
      'subtitle': 'Sep 2016 - Present',
      'content': [
        'Top100 is a requirement management and analytics application which contains data about Operator requirements of Bands.',
        'Main responsibilities are: <br>' +
        '<ul><li>Designing the website and UI</li>' +
        '<li>Develop new Features</li>' +
        '<li>Fix bugs </li></ul>'
      ],
      'chips': ['PHP5', 'CodeIgniter', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript (ES6)', 'jQuery', 'Apache', 'MySQL', 'Babel']

    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
